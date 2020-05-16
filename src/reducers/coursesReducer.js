const coursesInitialState = {};
const customersReducer = (state = coursesInitialState, action) => {
  switch (action.type) {
    case "SET_COURSES": {
      return { ...action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default customersReducer;
