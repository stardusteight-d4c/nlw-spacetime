"use client"

import { FormEvent } from "react"
import { MediaPicker } from "./MediaPicker"
import { Camera } from "lucide-react"
import { useRouter } from "next/navigation"

interface Props {}

export const Form = (props: Props) => {
  const router = useRouter()

  const cookies = document.cookie.split(";")
  const tokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("token="),
  )
  const token = tokenCookie?.split("=")[1]

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fileToUpload = formData.get("coverUrl")
    let coverUrl: string = ""
    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set("file", fileToUpload)
      const uploadResponse = await fetch("/upload", {
        method: "POST",
        body: uploadFormData,
      }).then((res) => res.json())
      coverUrl = uploadResponse.data.fileUrl
    }
    await fetch("/memories", {
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

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 outline-none placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
      <button
        type="submit"
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-baiJamjuree text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  )
}
