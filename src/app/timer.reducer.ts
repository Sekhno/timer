import { createReducer, on } from '@ngrx/store'
import { start, stop, reset, add } from './timer.actions'

export interface StateInterface {
    value?: number,
    isPlay?: boolean,
    addValue?: number
}

export const initialState: StateInterface = {
    value: 0,
    isPlay: false,
}

const _timerReducer = createReducer(
    initialState,
    on(start, (state: StateInterface) => ({ isPlay: true })),
    on(stop, (state: StateInterface) => ({ isPlay: false })),
    on(reset, (state: StateInterface) => ({ value: 0 })),
    on(add, (state: StateInterface) => ({ addValue: 60 }))
)

export function timerReducer(state, action) {
    return _timerReducer(state, action)
}