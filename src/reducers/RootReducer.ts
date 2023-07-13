import { ActionTypes } from "../enums/ActionTypes";

export interface IGenericInitialState<T> {
    [key: string]: T;
  }

export interface I_InitialState{
    questionNo: number;
    selectedOption: number;
    isCorrect: boolean;
}

interface IActionA {
    type: ActionTypes;
    payload: { 
        questionNo: number;
        selectedOption: number;
        isCorrect: boolean;
    };
}

const initialState:  IGenericInitialState<I_InitialState> = {};

const RootReducer = (state: IGenericInitialState<I_InitialState> = initialState, action: IActionA) : IGenericInitialState<I_InitialState> => {
    switch(action.type){
        case 'SAVE_DATA':
            return {...state, [action.payload.questionNo]: {...action.payload}};
        default: 
        return state;
    }

}


export default RootReducer;