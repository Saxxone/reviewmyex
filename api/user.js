export default (axios, auth) => ({
  fetchAllUsers(payload) {
    return axios.get("/distributors/create-user");
  },
  getUserData() {
    return axios.get("/users/me");
  },

});
