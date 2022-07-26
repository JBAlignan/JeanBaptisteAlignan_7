import axios from 'axios';

const state = {
    // user: null,
    // posts: null,
    user: [{
    firstName: null,
    lastName: null,
    email: null,
    password: null
    }]

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
        UserForm.append('firstName', form.firstName)
        UserForm.append('lastName', form.lastName)
        UserForm.append('email', form.email)
        UserForm.append('password', form.password)
        await dispatch('Login', UserForm)
    },

    // Connection de l'utilisateur.
    async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit ('SetUser', User.get('firstName', 'lastName'))
    },

    // Déconnection de l'utilisateur.
    async LogOut({commit}) {
        let user = null
        commit ('logout', user)
    }

};
const mutations = {

    setUser(state, username){
        state.user = username
    },
    setPosts(state, posts){
        state.posts = posts
    },
    LogOut(state){
        state.user = null
    },

};


export default {
  state,
  getters,
  actions,
  mutations
};