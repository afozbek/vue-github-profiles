import axios from "@/github-instance";

import {
  GET_USER_LIST_PENDING,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
} from "./mutations-types";

export default {
  async getUserList({ commit }, { username }) {
    console.log("VUEX");
    // POST: axios isteği atılsın filtreler ve sort yapılıp veriler gelsin
    commit(GET_USER_LIST_PENDING);

    try {
      const result = await axios.get(`/search/users?q=${username}`);

      const userList = result.data.total_count > 0 ? result.data.items : [];

      console.log({ ...userList[0] });

      commit(GET_USER_LIST_SUCCESS, userList);
    } catch (err) {
      commit(GET_USER_LIST_FAILED);
    }
  },
};
