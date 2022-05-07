import axios from "axios";

export const state = () => {

}

export const actions = {
  async login({ commit }, { username }) {
    try {
      const { data } = await axios.post("/api/login", {username})
      if (data.error) {
        commit("LOGIN_FAIL", data.error, { root: true });
        return;
      }

      const user = {
        username, 
        token: data.accessToken
      }
      commit("LOGIN_SUCCESS");
      commit("SAVE_AUTH", user, { root: true })
    }
    catch (error) {
      commit("LOGIN_FAIL", error, { root: true });
    }
  }
};

export const mutations = {
  LOGIN_SUCCESS(state) {
    this.$router.push('/stations')
  },
};
