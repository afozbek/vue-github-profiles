import {
  GET_USER_LIST_PENDING,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
} from "./mutations-types";

import { PENDING, SUCCESS, FAILED } from "../status";

export default {
  [GET_USER_LIST_PENDING](state) {
    state.applicationStatus = PENDING;
    state.loading = true;
    state.hasError = false;
    state.error = "";
  },
  [GET_USER_LIST_SUCCESS](state, userList) {
    state.loading = false;
    state.userList = userList;
    state.applicationStatus = SUCCESS;
    state.hasError = false;
    state.error = "";
  },
  [GET_USER_LIST_FAILED](state, { message }) {
    state.loading = false;
    state.applicationStatus = FAILED;
    state.userList = [];
    state.hasError = true;
    state.error = message;

    setTimeout(() => {
      state.hasError = false;
      state.error = "";
    }, state.errorDuration);
  },
};
