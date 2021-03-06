import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            contador: 1234
        }
    },
    actions: {
        contarUp({commit}, cant) {
            commit('incrementar',cant)
        },
        contarDown({commit}, cant) {
            commit('decrementar',cant)
        }
    },
    mutations: {
        incrementar(state,cant) {
            state.contador += cant
        },
        decrementar(state,cant) {
            state.contador -= cant
        }
    }
})