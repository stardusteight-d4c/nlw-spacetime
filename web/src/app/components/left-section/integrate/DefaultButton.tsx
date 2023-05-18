import React from "react"

interface Props {
  title: string
}

export const DefaultButton = ({ title }: Props) => {
  return (
    <a
      className="font-alt inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
      href=""
    >
      {title}
    </a>
  )
}
