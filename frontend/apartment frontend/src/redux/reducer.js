import { ADD_FLAT } from "./action";


const initState={
    flat:[]
}


export const flatReducer =(store=initState,{type,payload})=>{

    switch(type){
        case ADD_FLAT :
            return {...store,flat:payload}
        default:
            return store    
    }
}