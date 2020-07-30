export default {
  getUserList(state) {
    return state.userList;
  },
  getLoadingStatus(state) {
    return state.loading;
  },
  hasError(state) {
    return state.hasError;
  },
  errorMessage(state) {
    return state.error;
  },
};
