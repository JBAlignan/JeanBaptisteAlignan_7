import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';



const state = { 
        userId: null,
        firstName: null,
        lastName: null,
        token: null
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
};
const actions = {

    // Inscription et redirection de l'utilisateur après inscription.
    async Signup ({dispatch}, form) {
        await axios.post('signup', form)
        let UserForm = new FormData()
        UserForm.append('userId', form.userId)
        UserForm.append('firstName', form.firstName)
        UserForm.append('lastName', form.lastName)
        UserForm.append('token', form.token)
        await dispatch('Login', UserForm)
    },

    // Connection de l'utilisateur.
    async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit ('SetUser', User.get('userId', 'firstName', 'lastName', 'token'))
    },

    // Déconnection de l'utilisateur.
    async LogOut({commit}) {
        let user = null
        commit ('logout', user)
    }

};
const mutations = {

    setUser (state, userId, firstName, lastName, token){
        state.userId = userId
        state.firstName = firstName
        state.lastName = lastName
        state.token = token

    },

    LogOut (state){
        state.userId = null,
        state.firstName = null
        state.lastName = null
        state.token = null

    },

};


export default {
  state,
  getters,
  actions,
  mutations
};