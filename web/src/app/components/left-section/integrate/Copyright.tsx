import React from "react"

interface Props {}

export const Copyright = (props: Props) => {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 na NLW da{" "}
      <a
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://rocketseat.com.br"
      >
        Rocketseat
      </a>
    </div>
  )
}
