import axios from "axios";

const state = {
    person: {
        name: '123',
        diffculty: '1',
        creditLevel: '2',
        energyConsumption: '3',
    },
    tripChart: {
        dataAxis: [],
        dataYaxis: [],
    },
    resourceChart: {
        dataAxis: [],
        dataYaxis: [],
    },
}

// getters
const getters = {
    
}

// actions
const actions = {
    getPerson({state, commit}, payload) {
        let {name} = payload
        axios.get(`/smartSociety/a?name=${name}`).then(res => {
            let {diffculty, creditLevel, energyConsumption} = res.data
            let person = {...state.person}
            person.diffculty = diffculty
            person.creditLevel = creditLevel
            person.energyConsumption = energyConsumption
            commit('setState', {
                person
            })
        })
    },

    getTripChart({state, commit}) {
        axios.get(`/smartSociety/d`).then(res => {
            let tripChart = {...state.tripChart}
            tripChart.dataAxis = res.data.dataAxis
            tripChart.dataYaxis = res.data.dataYaxis
            commit('setState', {
                tripChart
            })
        })
    },

    getResourceChart({state, commit}) {
        axios.get(`/smartSociety/e`).then(res => {
            let resourceChart = {...state.resourceChart}
            resourceChart.dataAxis = res.data.dataAxis
            resourceChart.dataYaxis = res.data.dataYaxis
            commit('setState', {
                resourceChart
            })
        })
    },

    
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
