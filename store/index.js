const initialState = () => ({
  auth: null,
  error: null
})
export const state = initialState

export const actions = {
  logOut({ commit }) {
    commit('LOGOUT')
    commit('RESET_STATE')
    localStorage.clear()
    sessionStorage.clear()
  }
}

export const mutations = {
  RESET_STATE(state) {
    Object.assign(state, initialState);
  },
  SAVE_AUTH(state, user) {
    state.auth = user
  },
  LOGOUT(state) {
    state.auth = null
    this.$router.push('/')
  },
  LOGIN_FAIL(state, error) {
    state.error = error
  }
}

export const getters = {
  isLoggedIn(state) {
    return !!state.auth
  }
}
