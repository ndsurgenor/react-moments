import axios from "axios";

axios.defaults.baseURL = "https://nds-drf-api-b69fd84855e5.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;