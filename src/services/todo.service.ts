import { Todo } from "../models/todo.model.ts"

interface CreateTodoInput {
    title: string,
    desc: string
}

export const listTodos = async () => {
    return await Todo.all()
}


export const createTodo = async (input: CreateTodoInput) => {
    const random = crypto.randomUUID()
    await Todo.create({
        id: random,
        title: input.title,
        desc: input.desc,
    })

    return await Todo.find(random)
}
