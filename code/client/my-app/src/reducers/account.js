function accountReducer(state = null, action) {
    switch (action.type) {
        case 'account':
            return action.payload
        default:
            return state
    }
}
export default accountReducer;