const rotateReducer = (state, action) => {
    switch (action.type) {
        case "ROTATE": 
        return {
            rotating: action.payload
        };

        case "TEST_ACTION":
            return {
                testAction: action.payload
            }
        default:
            return state;
    }
}

export default rotateReducer;