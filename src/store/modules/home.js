import axios from "axios";

const state = {
    person: {
        name: '123',
        diffculty: '1',
        creditLevel: '2',
        energyConsumption: '3',
    }
    
}

// getters
const getters = {
    
}

// actions
const actions = {
    getPerson({state, commit}, payload) {
        let {name} = payload
        axios.get(`/smartSociety/a?name=${name}`).then(res => {
            console.log(res);
            let {diffculty, creditLevel, energyConsumption} = res.data
            let person = {...state.person}
            person.diffculty = diffculty
            person.creditLevel = creditLevel
            person.energyConsumption = energyConsumption
            commit('setState', {
                person
            })
        })
    }
  
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
