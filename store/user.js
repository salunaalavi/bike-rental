import LOGIN_USER from '~/apollo/queries/fetchUser.gql'

export const state = () => {

}

export const actions = {
  async login({ commit }, { username }) {
    try {
      const client = this.app.apolloProvider.defaultClient
      const { data } = await client.query({
        query: LOGIN_USER,
        variables: {
          username
        }
      })
      if (data.error) {
        commit("LOGIN_FAIL", data.error, { root: true });
        return;
      }

      const user = {
        username,
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
    this.$router.push('/')
  },
};
