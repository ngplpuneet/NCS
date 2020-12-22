import { getDataConstants } from '../_constants';
import * as data from '../sample.json';

export const getDataActions = {
    getData
};

function getData() {
    return dispatch => {        
        dispatch(success(data.data))
    };

    function success(data) { return { type: getDataConstants.GETDATA_SUCCESS, data } }    
}