

export const todoReducer = () =>{

    switch (action.type) {
        case 'ABC':
            
           throw new Error('Action.type = ABC no esta implementada')
    
        default:
            return initialState;
    }
}