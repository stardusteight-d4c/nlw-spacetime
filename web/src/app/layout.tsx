import LeftSection from "./components/left-section/LeftSection"
import "./globals.css"
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google"

// avoids layout shift
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" })
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
})

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} h-screen overflow-hidden bg-gray-900 font-roboto text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <LeftSection />
          <section className="flex overflow-y-scroll h-screen flex-col bg-stars bg-cover">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
