import { getUser } from "@/lib/auth"
import Image from "next/legacy/image"
import React from "react"

interface Props {}

export const Profile = (props: Props) => {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          className="h-5 w-5 rounded-full object-cover"
        />
      </div>

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300 cursor-pointer">
          Quero sair
        </a>
      </p>
    </div>
  )
}
