const chapterInitialState = {};
const chaptersReducer = (state = chapterInitialState, action) => {
  switch (action.type) {
    case "SET_CHAPTERS": {
      return { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default chaptersReducer;
