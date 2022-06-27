const defaultState = {
    tasks:["sauver le monde","nettoyer la Lune"]
}
export const reducer = (state=defaultState, action)=> {
    switch(action.type){
        case "addtask":
            //state.tasks.push(action.value);
            return {
                ...state,
                newTasks: state.tasks.unshift(action.value)
            };
        case "removetask":
            let index = action.value;
            return {
                ...state,
                newTasks: state.tasks.splice(index,1)
            };
        default:
            break;
    }
    return state
}