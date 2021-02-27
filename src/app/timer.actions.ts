import { createAction } from '@ngrx/store'

enum ActionTypes {
    Start = '[Timer Component] Starting',
    Stop = '[Timer Component] Stoping',
    Reset = '[Timer Component] Reset',
    Add = '[Timer Component] Add'
}

export const start = createAction(ActionTypes.Start)
export const stop = createAction(ActionTypes.Stop)
export const reset = createAction(ActionTypes.Reset)
export const add = createAction(ActionTypes.Add)
