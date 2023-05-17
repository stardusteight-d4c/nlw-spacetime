import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <LeftSection />
      <RightSection />
    </main>
  )
}
