// initial state
// shape: [{ id, quantity }]
const state = {
    person: {
        name: '123'
    }
    
}

// getters
const getters = {
  
}

// actions
const actions = {
  
  
}

// mutations
const mutations = {
    setState (state, payload) {
        for (const key in payload) {
            if (payload.hasOwnProperty(key)) {
                state[key] = payload[key]
            }
        }
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
