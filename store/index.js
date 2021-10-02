export const state = () => ({
  user: {},
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // if (req.session.user) {
    //   commit('user', req.cookies)
    // }
    const token = req.headers.cookie
      .split(' ')
      .find((cookie) => cookie.includes('token'))
    if (token) {
      const username = Buffer.from(token.split('=')[1], 'base64')
        .toString()
        .split(':')[0]
      commit('setUser', { username })
    }
  },
  getUser({ commit }, payload) {
    commit('setUser', payload)
  },
}
