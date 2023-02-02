
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}]

const todoReducer = (state = initialState, action = {} ) =>{

    if(action.type === '[TODO] modified todo'){
        return [...state, action.payload]
    }

    return state
}

let todos =  todoReducer()

let newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}


const addTodoAction = {
    type:'[TODO] modified todo',
    payload: newTodo
}

todos =  todoReducer( todos, addTodoAction )

console.log({state: todos});

