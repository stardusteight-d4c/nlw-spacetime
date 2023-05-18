import React from "react"
import { EmptyMemories } from "./integrate/EmptyMemories"

interface Props {}

export default function RightSection(props: Props) {
  return (
    <section className="flex flex-col bg-stars bg-cover p-16">
      <EmptyMemories />
    </section>
  )
}
