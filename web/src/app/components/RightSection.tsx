import React from "react"

interface Props {}

export default function RightSection(props: Props)  {
  return (
    <section className="flex flex-col bg-stars bg-cover p-16">
      <div className="flex flex-1 items-center justify-center">
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, começa{" "}
          <a href="" className="underline hover:text-gray-50">
            criar agora
          </a>
          !
        </p>
      </div>
    </section>
  )
}
