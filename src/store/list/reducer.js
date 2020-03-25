
import produce from 'immer'

function reducer(state = [], action) {
    switch (action.type) {
        case "UPDATE_LIST":
            return produce(state, draft => {
                const { list } = action
                draft.push(list)
            })
        default:
            return state
    }
}

export default reducer;