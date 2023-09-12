<div align="center">
  <img src="logo.png" width="222" height="78" />
</div>

<h1 align="center">
  Time Capsule, Share photos and memories
</h1>

A time capsule application is a platform that allows users to save and share photos and memories of special moments that can be accessed at a future time. Overall, this time capsule application allows users to upload photos of special moments, provides a friendly user interface with search and organization features, and ensures data security and integrity through modern and effective technologies on both the frontend and on the backend. Users can relive their memories in the future, making the application a valuable tool for preserving important life moments.

## :hammer_and_wrench: Tools

### Frontend

- React
- TypeScript
- Lucide Icons
- Next.js
- TailwindCSS
- FormData

### Backend

- Fastify
- TypeScript
- Zod
- Axios
- Prisma
- multipart/form-data

## :mailbox_with_mail: Utilities

### Lucide Icons

The Lucide Icons library is an open source icon collection designed specifically for use in web and app development projects. Lucide icons are known for their simplicity and clarity. They are designed to be easily recognizable and understandable, making them ideal for improving the usability and aesthetics of user interfaces.

All icons in the library are vector, which means they can be scaled and scaled without loss of quality. This makes Lucide icons ideal for responsive apps and designs that need to adapt to different screen sizes.

The Lucide Icons library offers a variety of icons that cover several categories, from action icons like arrows and buttons to social media icons and general-purpose icons like bullet point symbols.

In summary, Lucide Icons is an open source icon library that stands out for its simplicity, clarity and versatility. It offers a diverse collection of ready-to-use vector icons in web design and development projects, helping to improve the user experience and aesthetics of user interfaces. Because it is licensed under an open source license, it is a popular choice for developers who want to add high-quality icons to their projects for free.

### Zod

Zod is a TypeScript library that provides a highly typed data validation system and an easy way to define and verify data schemas at compile time. It's designed to make code safer, more concise, and more readable, especially when working with data in TypeScript applications.

One of Zod's main advantages is its strong static typing. It allows you to define data types strictly and safely, helping to avoid compile-time type errors. Zod allows you to define data validation schemes declaratively. You can specify how data should be formatted, which fields are required, their types, and more.

You can compose Zod schemas in a modular way, reusing existing schema definitions to create more complex data structures. This makes it easier to maintain and extend your schemas as your application grows. Zod supports asynchronous validation, which is useful when you need to validate data that depends on asynchronous operations, such as database queries or API calls.

In short, Zod is a TypeScript library that simplifies the validation and definition of data schemas at compile time. It is particularly useful in TypeScript projects that require strict data validation and type-safe handling, helping developers create more reliable and error-resistant applications. If you're looking for a robust way to handle data validation in your TypeScript application, Zod is an excellent option to consider.

## :speech_balloon: Explanations

### Cookie session

The "session cookie" strategy is an approach to managing user sessions in a web application. In this strategy, a session cookie is used to track the state of the user's session on the server. This session generally lasts only during the user's current visit to the website and ends when the user closes the browser or after a defined period of inactivity.

Here are the main components and principles of the session cookie strategy:

1. **Session Cookie**: A session cookie is a small text file stored in the user's browser. It contains a unique identifier that is associated with the user's session on the server. This identifier can be used to track session state on the server.

2. **Server Session**: On the server, a data structure is maintained for each active user session. This structure stores information about the session state, such as user data, preferences, and other relevant information. The session cookie identifier is used to link the client to the session state on the server.

3. **Session Login**: When a user starts a session (for example, logging in), the server creates a new session and generates a session cookie with a unique identifier. This cookie is sent to the user's browser.

4. **Subsequent requests**: In each subsequent request from the user to the server (for example, when browsing the website pages), the session cookie is sent back to the server. The server uses the session cookie identifier to associate the request with the correct session state.

5. **Session Closure**: When the user closes the browser or leaves the website, the session cookie is normally automatically deleted, thus ending the session. Additionally, many "session cookie" implementations set an inactivity timeout. If the user does not interact with the website for a defined period of time, the session is terminated and the session cookie is removed.

6. **Security**: It is important to take steps to protect the security of the session cookie, such as encrypting it to prevent interception and forgery. Additionally, the server must validate the session cookie identifier on each request to ensure that it corresponds to a valid session.

The "session cookie" strategy is widely used in web applications to maintain the user's session state between interactions with the website. It is effective for storing temporary and non-sensitive information, such as the shopping cart in an online store, user preferences or authentication state. However, it is important to consider security when implementing this strategy to avoid security vulnerabilities such as session spoofing attacks.

```tsx
// web/src/app/api/auth/callback/route.ts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code")
    const redirectTo = request.cookies.get("redirectTo")?.value
    const registerResponse = await fetch("http://localhost:3333/register", {
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
```

### Multipart/form-data

The strategy of sending data using the multipart/form-data format is a common technique in web development to send form information that includes binary files, such as images, videos or documents, through HTTP requests. This strategy is widely used when you need to allow users to upload files to a web server.

Here are the main components and principles of the multipart/form-data sending strategy:

- HTML Form: On the client side, you create an HTML form where users can fill in data fields, including file input fields (<input type="file">). The form must also specify enctype="multipart/form-data" as an attribute, indicating that data will be sent in multipart/form-data format.

- Multipart Encoding: When the user submits the form, the form data is packaged in an HTTP request with a Content-Type header set to multipart/form-data. Form data, including files, is divided into multiple parts (form parts) separated by a delimiter.

- Delimiters: Delimiters are special sequences of characters that separate each part of the form. They are used to indicate where each form field begins and ends and their respective values, as well as the files sent.

- Field Name: Each part of the form includes a header that specifies the field name (usually corresponding to the name attribute in HTML) and other information such as the content type (for example, image/jpeg for a JPG image).

- Content: The content of each part of the form includes the actual field data, such as the value of a text field or the content of the submitted file. The file data is included as binary.

- Server-side Processing: On the server side, the web server or web application needs to process the multipart/form-data request to extract the form data and uploaded files. This is often done using libraries or tools that facilitate the processing of multipart/form-data requests. Data can be stored on disk, processed, or used as needed.

- Security: It is important to take security measures when dealing with sending multipart/form-data data, such as limiting the size of files that can be sent, checking the file type to prevent malicious upload attacks (e.g. ensuring that a JPEG file is actually a JPEG image) and protect against denial of service attacks.

The multipart/form-data upload strategy is essential when you need to allow users to upload files, such as profile images, documents, videos, or any type of binary file, to a web server. It is a powerful technique that is widely used in web applications that involve file uploading, such as social networks, file sharing services, and content management systems.

```tsx
// web/src/app/components/new-memory/Form.tsx
async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const fileToUpload = formData.get("coverUrl")
  let coverUrl: string = ""
  if (fileToUpload) {
    const uploadFormData = new FormData()
    uploadFormData.set("file", fileToUpload)
    const uploadResponse = await fetch("http://localhost:3333/upload", {
      method: "POST",
      body: uploadFormData,
    }).then((res) => res.json())
    coverUrl = uploadResponse.data.fileUrl
  }
  await fetch("http://localhost:3333/memories", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      coverUrl,
      content: formData.get("content"),
      isPublic: formData.get("isPublic"),
    }),
  }).then((res) => res.json())
  router.push("/")
}
```

```tsx
// server/src/routes/upload.ts
export async function uploadRoutes(app: FastifyInstance) {
  app.post("/upload", async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    })
    if (!upload) {
      return reply.status(400).send()
    }
    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)
    if (!isValidFileFormat) {
      return reply.status(400).send()
    }
    const fileId = randomUUID()
    const extension = extname(upload.filename)
    const fileName = fileId.concat(extension)
    const writeStream = createWriteStream(
      resolve(__dirname, "..", "..", "uploads", fileName)
    )
    await pump(upload.file, writeStream)
    const fullUrl = request.protocol.concat("://").concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()
    return { fileUrl }
  })
}
```

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>
