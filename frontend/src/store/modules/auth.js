import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    userId: null,
    firstName: null,
    lastName: null,
    token: null,
    admin: null
};

const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
};

const actions = {
    // Connection de l'utilisateur.
    logIn({
        commit
    }, user) {
        commit("SET_USER", user)
    },
    // Déconnection de l'utilisateur.
    logOut({
        commit
    }) {
        commit("LOGOUT")
    }

};
const mutations = {
    SET_USER(state, user) {
        state.userId = user.userId
        state.firstName = user.firstName
        state.lastName = user.lastName
        state.token = user.token
        state.admin = user.admin
    },

    LOGOUT(state) {
        state.userId = null,
            state.firstName = null
        state.lastName = null
        state.token = null
        state.admin = null
    },

};


export default {
    state,
    getters,
    actions,
    mutations
};