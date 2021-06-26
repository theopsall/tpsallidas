import {
    useDispatch as _useDispatch,
    useSelector as _useSelector,
    TypedUseSelectorHook
} from 'react-redux'

export interface IState {
    displayedScreen: string
}

export interface IAction {
    type: string;
    payload?: any;
}

export const useDispatch = () => {
    const dispatch = _useDispatch()
    return (event: IAction) => {
        dispatch(event)
    }
}

export const useSelector: TypedUseSelectorHook<IState> = _useSelector