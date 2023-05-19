import { cookies } from "next/headers"
import { leftSectionStyles as css } from "./styles"
import { SignIn } from "./integrate/SignIn"
import { Copyright } from "./integrate/Copyright"
import { Hero } from "./integrate/Hero"
import { Profile } from "./integrate/Profile"

interface Props {}

export default function LeftSection(props: Props) {
  const isAuthenticated = cookies().has("token")

  return (
    <section className={css.wrapper}>
      <div className={css.blur} />
      <div className={css.stripes} />
      {isAuthenticated ? <Profile /> : <SignIn />}
      <Hero />
      <Copyright />
    </section>
  )
}
