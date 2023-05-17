import React from "react"
import nlwLogo from "../../assets/nlw-spacetime-logo.svg"
import Image from "next/image"
import { leftSectionStyles as css } from "./styles"

interface Props {}

export default function LeftSection(props: Props) {
  return (
    <section className={css.wrapper}>
      <div className={css.blur} />
      <div className={css.stripes} />
      <a
        href=""
        className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          {/* <User className="h-5 w-5 text-gray-500" /> */}
        </div>

        <p className="max-w-[140px] text-sm leading-snug">
          <span className="underline">Crie sua conta</span> e salve suas
          memórias
        </p>
      </a>
      <div className="space-y-5">
        <Image src={nlwLogo} alt="NLW Spacetime" />
        <div className="max-w-[420px] space-y-1">
          <h1 className="relative z-50 text-5xl font-bold leading-tight text-gray-50">
            Sua cápsula do tempo
          </h1>
          <p className="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
        </div>
        <a
          className="font-alt inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
          href=""
        >
          CADASTRAR LEMBRANÇA
        </a>
      </div>
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
    </section>
  )
}
