export const state = () => ({
  songs: null,
  progress: 0,

})


export const getters = {
  getUserAudio: (state) => {
    return state.songs.filter(song => {
      return song.audio
    })
  },

  getUploadProgress: (state) => {
    return state.progress
  },
  getUserVideos: state => {
    return state.songs.filter(song => {
      return !song.audio
    })
  },
  getUserEvents: state => {
    return state.songs
  },
  getFeaturedSongs: state => {
    return state.songs
  },

  getTopAudio: state => {
    return state.songs
  },

  getTopVideos: state => {
    return state.songs
  },
  getSong: (state) => {
    return state.song
  }
}

export const mutations = {
  setUploadProgress(state, data) {
    state.progress = data

  },

  setSongs(state, songs) {
    state.songs = songs;
  },

  setSong(state, song) {
    state.song = song;
  }
}


export const actions = {


  uploadPost(vuexContext, post) {


    let axiosConfig = {
      onUploadProgress: e => vuexContext.commit('setUploadProgress', Math.round(e.loaded * 100 / e.total))
    };


    return this.$axios.post('/posts', post, axiosConfig)
  },

  async loadSongs({ commit }) {

    const songs = await this.$axios.get('/songs')

    commit('setSongs', songs.data.songs)
  },
  loadSong({ commit }, id, title) {

  },
  updatePost(vuexContext, post) {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
      },
      onUploadProgress: e => vuexContext.commit('setUploadProgress', Math.round(e.loaded * 100 / e.total))
    };


    return this.$axios.patch(`/posts/${post.id}`, post.temp, axiosConfig)
  },
  deleteSong(vuexContext, id) {
    return this.$axios.delete(`/songs/${id}`)
  },

}
