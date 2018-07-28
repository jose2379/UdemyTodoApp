import * as fromFilter from './filter.actions';

const stateInit: fromFilter.validFilter = 'all';

export function filterReducer ( state = stateInit, action: fromFilter.actions ): fromFilter.validFilter {

    switch ( action.type ) {
        case fromFilter.SET_FILTER:
        return action.payload;

        default:
        return state;
    }
}


