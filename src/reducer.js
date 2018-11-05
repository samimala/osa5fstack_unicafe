

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const newGState = {
          ...state,
          good: state.good + 1
      }
      return newGState 
    case 'OK':
      const newOState = {
        ...state,
          ok: state.ok + 1
      }
      return newOState
    case 'BAD':
      const newBState = {
        ...state,
        bad: state.bad + 1
      }
      return newBState
    case 'ZERO':
      const newState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return newState
    default:
  }
  return state
}

export default counterReducer
