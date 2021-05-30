export const TOGGLE_COLOR_FILTER = "TOGGLE_COLOR_FILTER";

export const TOGGLE_SHAPE_FILTER = "TOGGLE_SHAPE_FILTER";

export const toggleShapeFilter = (shape:string)=>({type: TOGGLE_SHAPE_FILTER, payload:shape});

export const toggleColorFilter = (color:string)=>({type: TOGGLE_COLOR_FILTER, payload:color});