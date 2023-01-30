import {AuthThunk} from "./authReducer";
import {AppThunkDispatchType} from "./reduxStore";

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionType ) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
             return state
    }
}

//actions
const initializedSuccessAC = () => ({type: 'INITIALIZED-SUCCESS'} as const)

//thunks
export const initializeApp = ():AppThunkDispatchType => (dispatch) => {
    dispatch(AuthThunk()).then(() => {
        dispatch(initializedSuccessAC())
    })
}

//types
type InitialStateType = {
    initialized: boolean
}

type ActionType = ReturnType<typeof initializedSuccessAC>