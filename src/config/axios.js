import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://stgapi.omnicuris.com/api/v3",
});

export default axios;
