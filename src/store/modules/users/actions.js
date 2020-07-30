import axios from "@/github-instance";

import {
  GET_USER_LIST_PENDING,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
} from "./mutations-types";

import { UNKNOWN_ERROR, USER_NOT_FOUND } from "./error-enum";

export default {
  async getUserList({ commit }, { username }) {
    // POST: axios isteği atılsın filtreler ve sort yapılıp veriler gelsin
    commit(GET_USER_LIST_PENDING);

    try {
      const result = await axios.get(`/search/users?q=${username}`);

      if (result.data.total_count === 0) {
        commit(GET_USER_LIST_FAILED, { message: USER_NOT_FOUND });
        return;
      }

      const userList = result.data.items;

      commit(GET_USER_LIST_SUCCESS, userList);
    } catch (err) {
      commit(GET_USER_LIST_FAILED, { message: UNKNOWN_ERROR });
    }
  },
};
