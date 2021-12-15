// Dispached from component
export const rotateAction = (payload) => {
    return {
      type: "ROTATE",
      payload
    }
  }

//Dispatched from Saga
  export const rotateActionFromSaga = (payload) => {
    return {
      type: "ROTATE_FROM_SAGA",
      payload
    }
  }