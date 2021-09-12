function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + action.payload }
        case 'counter/decremented':
            return { value: state.value - action.payload }
        default:
            return state
    }
}
export default counterReducer;