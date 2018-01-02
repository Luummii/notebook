const state = {
  tasks: []
}

const mutations = {
  ADD_TASK (state) {
    
  },
  CHANGE_TASK (state) {
    
  },
  DELETE_TASK (state) {
    state.main++
  }
}

const actions = {
  addTask ({ commit }) {
    
    commit('ADD_TASK')
  }
}

const getters = {
  tasks: state => {
    return state.tasks
  }
}

export default {
  state,
  mutations,
  actions
}
