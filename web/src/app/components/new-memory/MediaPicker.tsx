"use client"

import { ChangeEvent, useState } from "react"

interface Props {}

export const MediaPicker = (props: Props) => {
  const [preview, setPreview] = useState<string | null>(null)
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) {
      return
    }
    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />
      {preview && (
        <img
          src={preview}
          alt=""
          className="w-full h-60 rounded-lg object-cover"
        />
      )}
    </>
  )
}
