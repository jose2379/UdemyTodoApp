import { Action } from "@ngrx/store";


export const SET_FILTER = '[FILTER] Set Filter';

export type validFilter = 'all' | 'completed' | 'pending';

export class SetFilter implements Action {
    readonly type = SET_FILTER;
    constructor( public payload: validFilter ){}
}

export type actions = SetFilter;
