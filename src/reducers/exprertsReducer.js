const expertInititalState = {};
const expertsReducer = (state = expertInititalState, action) => {
  switch (action.type) {
    case "SET_EXPERT": {
      return { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default expertsReducer;
