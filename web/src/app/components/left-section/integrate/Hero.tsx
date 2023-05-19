import nlwLogo from "@/assets/nlw-spacetime-logo.svg"
import Image from "next/image"
import { DefaultButton } from "./DefaultButton"

interface Props {}

export const Hero = (props: Props) => {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="relative z-50 text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <DefaultButton href="/memories/new" title="CADASTRAR LEMBRANÇA" />
    </div>
  )
}
