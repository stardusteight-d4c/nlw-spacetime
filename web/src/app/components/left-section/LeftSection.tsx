import React from "react"

import { leftSectionStyles as css } from "./styles"
import { Login } from "./integrate/Login"
import { Copyright } from "./integrate/Copyright"
import { Hero } from "./integrate/Hero"

interface Props {}

export default function LeftSection(props: Props) {
  return (
    <section className={css.wrapper}>
      <div className={css.blur} />
      <div className={css.stripes} />
      <Login />
      <Hero />
      <Copyright />
    </section>
  )
}
