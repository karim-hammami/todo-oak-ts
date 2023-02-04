import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port = 8080;

const router = new Router();
router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "hello world",
  };
});
app.use(router.routes());
app.use(router.allowedMethods());


// deno run --allow-net src/server.ts
console.log('running on port ', port);
await app.listen({ port });
