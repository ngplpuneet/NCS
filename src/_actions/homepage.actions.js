import { homepageConstants, filterType } from '../_constants';

export const homepageActions = {
    saveValue,
    getPosterList
};

function saveValue(value) {
    return dispatch => {          
        dispatch(success(value))        
    };

    function success(value) { return { type: homepageConstants.SAVEVALUE_SUCCESS, value } }    
}

function getPosterList(value,type){
    return (dispatch, getState) => {
        const state = getState().getData;  
        let filterValue;
        switch(type){
            case filterType.SEARCH: 
                dispatch(success(state.items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))))
                return;
            case filterType.YEAR_BY_DESC:
                filterValue = state.items.sort((a,b) => b.releaseYear - a.releaseYear)
                dispatch(success(filterValue))
                return;
            case filterType.YEAR_BY_ASC:
                filterValue = state.items.sort((a,b) => a.releaseYear - b.releaseYear)
                dispatch(success(filterValue))
                return;
            case filterType.TITLE_BY_DESC:
                filterValue = state.items.sort((a,b) => b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1)
                dispatch(success(filterValue))
                return;
            case filterType.TITLE_BY_ASC:
                filterValue = state.items.sort((a,b) => b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 1)
                dispatch(success(filterValue))
                return;
            default:
                dispatch(success(state.items))
                return;
        }        
    }

    function success(list) {return { type: homepageConstants.GETPOSTERLIST_SUCCESS, list}}
}