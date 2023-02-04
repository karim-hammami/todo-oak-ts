import { Router } from "https://deno.land/x/oak/mod.ts";
import TodoController from "../controllers/todo.controller.ts"
const router = new Router();

router
    .get("/todos", TodoController.getallTodos)
    .post("/todos", TodoController.createTodoItem)

export default router;

