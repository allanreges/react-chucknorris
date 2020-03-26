export function updateListRequest() {
    return {
        type: 'UPDATE_LIST',
    }
};

export function updateListSuccess(list) {
    return {
        type: 'UPDATE_LIST_SUCCESS',
        list
    }
};
