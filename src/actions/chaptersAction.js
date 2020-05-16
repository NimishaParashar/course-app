import axios from "../config/axios";

export const startsetChapters = (moduleId) => {
  return (dispatch) => {
    axios
      .get(`courses?courseSlug=thyroid-in-pregnancy&moduleId=${moduleId}`, {
        headers: {
          "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setChapters(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setChapters = (chapter) => {
  return {
    type: "SET_CHAPTERS",
    payload: chapter,
  };
};
