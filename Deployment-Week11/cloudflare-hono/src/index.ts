import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()

app.use(async (c:any, next:any) => {
  if (c.req.header("Authorization")) {
    // Do validation
    next() //only await when we have to do something after this
  } else {
    return c.text("You dont have acces");
  }
})

app.get('/', async (c:any) => {
  const body = await c.req.parseBody()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({msg: "as"})
})

export default app

/*

export interface env{

}
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};
*/