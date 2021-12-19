export const state = () => ({
  api: 'http://localhost:4000',
  bene: null,
  tempUser: null,
  topStories: null,
  topVideos: null,
  latestStories: null,
  headline: null
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setTopStories(state, stories) {
    state.topStories = stories
  },
  setTopVideos(state, videos) {
    state.topVideos = videos
  },
  setLatestStories(state, stories) {
    state.latestStories = stories
  },

  setHeadline(state, headline) {
    state.headline = headline
  }
}

export const getters = {
  getApi: state => {
    return state.api
  },

  getLatestStories: state => {
    return state.latestStories
  },

  getTopStories: state => {
    return state.topStories
  },

  getTopVideos: state => {
    return state.topVideos
  },

  getHeadline: state => {
    return state.headline
  }
}


export const actions = {
  setDetails({commit}, details) {
    commit('setDetails', details)
  },
  setTempUser({commit}, user) {
    commit('setTempUser', user)
  },

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('loadData')
  },

  async loadData({ commit }) {
    const { data } = await this.$axios.get('/initialData')

    const stories = data.topStories
    const videos = data.latestVideos
    const latest = data.latestStories



    commit('setTopStories', stories)
    commit('setTopVideos', videos)
    commit('setLatestStories', latest)
    
    
  },
}

