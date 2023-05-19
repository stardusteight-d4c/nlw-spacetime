import "dotenv/config"
import { resolve } from "node:path"
import fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import multipart from "@fastify/multipart"
import fastifyStatic from "@fastify/static"
import { memoriesRoutes } from "./routes/memories"
import { authRoutes } from "./routes/auth"
import { uploadRoutes } from "./routes/upload"

const app = fastify()

app.register(fastifyStatic, {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
})
app.register(multipart)
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: process.env.JWT_SECRET!,
})
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
  })
  .then((url) => {
    console.log(`🚀 Server ready at ${url}`)
  })
