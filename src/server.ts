import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from 'process';

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/helth', () => {
  return 'OK'
})

app.listen({ port: Number(env.PORT) || 3333 }).then(() => {
  console.log(`Server is running on port ${Number(env.PORT) || 3333}!`)
})