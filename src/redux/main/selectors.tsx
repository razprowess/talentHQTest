export const getSelectedColors = (state:any)=>{
    let selected = state.main.selectedColors;
    let result = {} as any;
    for(let item of selected){
        result[item] = true;
    }
    return result;
}

export const getSelectedShapes = (state:any)=>{
    let selected = state.main.selectedShapes;
    let result = {} as any;
    for(let item of selected){
        result[item] = true;
    }
    return result;
}