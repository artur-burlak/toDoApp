const initialState = {
  checkBox1: false,
  checkBox2: false,
  checkBox3: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_BOX_1':
      return {
        ...state,
        checkBox1: !state.checkBox1
      }
    case 'CHECK_BOX_2':
      return {
        ...state,
        checkBox2: !state.checkBox2
      };
    case 'CHECK_BOX_3':
      return {
        ...state,
        checkBox3: !state.checkBox3
      };
    default:
      return state
  }
}