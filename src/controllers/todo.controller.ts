import * as TodoService from "../services/todo.service.ts"


export default {
    getallTodos: async ({response}: {response: any}) => {
        response.status = 200;
        const res = await TodoService.listTodos()
        console.log(res)
        response.body = {
            success: true,
            data: res
        }
    },


    createTodoItem: async ({ request, response }: { request: any, response: any }) => {
        const {value} = await request.body({ type: 'json'  })
        console.log(value)
        const {title, desc} = await value
        console.log(title)
        console.log(desc)
        const body = {
            title,
            desc
        }
        response.staus = 200
        const res = await TodoService.createTodo(body)
        console.log(res)
        response.body = {
            success: true,
            data: res,
        }
    }
}
