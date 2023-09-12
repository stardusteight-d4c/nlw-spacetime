import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code")
    const redirectTo = request.cookies.get("redirectTo")?.value
    const registerResponse = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    }).then((res) => res.json())
    const { token } = registerResponse.data
    const redirectURL = redirectTo ?? new URL("/", request.url)
    const cookieExpiresInSeconds = 60 * 60 * 24 * 30
    return NextResponse.redirect(redirectURL, {
      headers: {
        "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
