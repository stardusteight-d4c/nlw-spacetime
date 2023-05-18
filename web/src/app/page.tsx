import { cookies } from "next/headers"
import LeftSection from "./components/left-section/LeftSection"
import RightSection from "./components/right-section/RightSection"

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <LeftSection />
      <RightSection />
    </main>
  )
}
