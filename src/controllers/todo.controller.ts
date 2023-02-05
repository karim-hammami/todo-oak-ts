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
    },


    findTodoItem: async ({ params, response }: { params: { id: string }; response: any }) => {
        const idValue = params.id
        console.log(idValue)
        const res = await TodoService.findTodo(idValue)
        console.log(res)
        response.body = {
            success: true,
            data: res,
        }
    },

    deleteTodoItem: async ({ params, response }: { params: { id: string }; response: any }) => {
        const idValue = params.id
        console.log(idValue)
        const res = await TodoService.deleteTodo(idValue)
        console.log(res)
        response.body = {
            success: true,
            data: res,
        }
    },

    updateTodoItem: async ({ params, request, response }: {
      params: { id: string },
      request: any,
      response: any,
    }) => {
        const idValue = params.id
        console.log(idValue)
        const {value} = await request.body({type: 'json'})
        console.log(value)
        const {title, desc, status} = await value
        console.log(title)
        console.log(desc)
        console.log(status)
        const body = {
            title,
            desc,
            status
        }

        response.status = 200
        const res = await TodoService.updateTodo(idValue, body)
        console.log(res)
        response.body = {
            success: true,
            data: res,
        }
    }
}
