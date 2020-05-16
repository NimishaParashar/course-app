import axios from "../config/axios";

export const startSetCustomers = () => {
  return (dispatch) => {
    axios
      .get("/courses?courseSlug=thyroid-in-pregnancy", {
        headers: {
          "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
        },
      })
      .then((response) => {
        const courses = response.data;
        console.log("courses", response.data);
        dispatch(setCourses(courses));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setCourses = (courses) => {
  return {
    type: "SET_COURSES",
    payload: courses,
  };
};
