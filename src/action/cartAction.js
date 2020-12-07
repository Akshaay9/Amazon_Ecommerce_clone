export const updateValue=(id,value)=>{
    return{
        type:"UPDATE_THE_QTY",
        payload:{
            id,value
        }
    }
}