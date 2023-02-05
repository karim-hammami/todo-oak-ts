import { Todo } from "../models/todo.model.ts";

interface CreateTodoInput {
  title: string;
  desc: string;
}

interface UpdateTodoInput {
    title: string;
    desc: string;
    status: string;
}

export const listTodos = async () => {
  return await Todo.all();
};

export const createTodo = async (input: CreateTodoInput) => {
  const random = crypto.randomUUID();
  await Todo.create({
    id: random,
    title: input.title,
    desc: input.desc,
  });

  return await Todo.find(random);
};

export const deleteTodo = async (id: string) => {
  await Todo.deleteById(id);
  return `Todo item: ${id} deleted successfuly`;
};

export const findTodo = async (id: string) => {
  return await Todo.find(id);
};


export const updateTodo = async (id: string, input: UpdateTodoInput) => {
    await Todo.where('id', id).update({
        title: input.title,
        desc: input.desc,
        status: input.status,
    })
    
    return await Todo.find(id)
}
