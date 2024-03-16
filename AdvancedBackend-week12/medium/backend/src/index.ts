import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign , verify } from 'hono/jwt'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>()

//middlewares
app.use('api/v1/blog/*', async(c,next)=>{
  const header=c.req.header("Authorization")??" "
  const token=header.split(" ")[1]
  const response= await verify(token,c.env.JWT_SECRET)
  if(response.id){
    await next()
  }
  else{
    c.status(401)
    return c.json({err:"Unauthorized"})
  }
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  const body=await c.req.json()

  try{
    const user=await prisma.user.create({
      data:{
        email:body.email,
        password:body.password
      }
    })
    const token=sign({id: user.id},c.env.JWT_SECRET)
    return c.json(token)
  }
  catch(e){
    c.status(403)
    return c.json(e)
  }
})
app.post('/api/v1/signin',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  const body=await c.req.json()
  const user=await prisma.user.findUnique({
    where:{
      email:body.email,
      password:body.password
    }
  })
  if(!user){
    c.status(401)
    return c.json({err:"Invalid Email"})
  }
  const jwt=sign({id: user.id},c.env.JWT_SECRET)
  return c.json(jwt)
})
app.get('/api/v1/blog/:id', (c) => {
	return c.text('get blog route')
})
app.post('/api/v1/blog', (c) => {

	return c.text('post blog route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('put blog route')
})


export default app
