const initialState = {
  num: 0,
  name: "",
  mount: ""
}

const reducer = (state = initialState, action) => {
  const newState = {...state}

  switch(action.type){
    case "INC":
      newState.num++
      break
    case "DEC":
      newState.num--
      break
    case "NAME":
      newState.name = action.text
      break
    case "MOUNT":
      newState.mount = action.type
      break
    default:
      break
  }

  return newState
}

export default reducer
