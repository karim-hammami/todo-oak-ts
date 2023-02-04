import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import todoRouter from "./routes/todo.routes.ts"    

const app = new Application();
const port = 8080;

const router = new Router();
router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "hello world",
  };
});


app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

// deno run --allow-net src/server.ts
console.log(`${yellow("Listening on:")} ${green(port.toString())}`);
await app.listen({ port });
