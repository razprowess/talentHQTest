import { getAllColors, getAllShapes } from "../../data/parser";
import { TOGGLE_COLOR_FILTER, TOGGLE_SHAPE_FILTER } from "./actions";

const INITIAL = {
    selectedColors: getAllColors(),
    selectedShapes: getAllShapes(),
}

type IActionType = {
    type: string;
    payload: any;
}
export const mainReducer = (state = INITIAL, action: IActionType) => {

    switch (action.type) {

        case TOGGLE_COLOR_FILTER:
            let colors = [...state.selectedColors];

            if (state.selectedColors.includes(action.payload)) {
                colors = state.selectedColors.filter((element) => element !== action.payload);
                //go back to initial if no color is selected
                colors = colors.length === 0 ? INITIAL.selectedColors : colors;
            }

            else {
                colors.push(action.payload);
            }

            return { ...state, selectedColors: colors };

        case TOGGLE_SHAPE_FILTER:
            let shapes = [...state.selectedShapes];

            if (shapes.includes(action.payload)) {
                shapes = shapes.filter((element) => element !== action.payload);
                //go back to initial if no shape is selected.
                shapes = shapes.length === 0 ? INITIAL.selectedShapes : shapes;
            }

            else {
                shapes.push(action.payload);
            }

            return { ...state, selectedShapes: shapes };

        default:
            return state;
    }

}