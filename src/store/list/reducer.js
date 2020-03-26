
function reducer(state = [], action) {
    switch (action.type) {
        case "UPDATE_LIST_SUCCESS":
            const { list } = action
            return list;
        default:
            return state;
    };
};

export default reducer;