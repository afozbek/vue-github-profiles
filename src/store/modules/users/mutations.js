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
  },
  [GET_USER_LIST_SUCCESS](state, userList) {
    state.loading = false;
    state.userList = userList;
    state.applicationStatus = SUCCESS;
  },
  [GET_USER_LIST_FAILED](state) {
    state.loading = false;
    state.applicationStatus = FAILED;
  },
};
