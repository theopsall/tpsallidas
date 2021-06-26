import { Actions } from './actions'
import { Screens } from './screens'
import {
    IState,
    IAction
} from './store'


const initState: IState = {
    displayedScreen: Screens.Index
}

export default (currentState: IState = initState, action: IAction) => {
    switch (action.type) {
        case Actions.SetDisplayedScreen:
            return {
                ...currentState,
                displayedScreen: action.payload
            }

        default: return currentState
    }
}