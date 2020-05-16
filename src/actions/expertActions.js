import axios from "../config/axios";

export const startSetExperts = () => {
  return (dispatch) => {
    axios
      .get("/courses/thyroid-in-pregnancy/experts", {
        headers: {
          "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setExperts(response.data));
      })
      .catch((err) => {});
  };
};

export const setExperts = (experts) => {
  return {
    type: "SET_EXPERT",
    payload: experts,
  };
};
