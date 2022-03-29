import axios from 'axios';
// Définition des données et leur valeur par défaut.
const state = {
    user: null,
    posts: null,
};
// Fonctions nous renseignant si une valeur de state est défini ou non (réponse booleenne).
const getters = {
    isAuthenticated: state => !!state.user,    
    StatePosts: state => state.posts,
    StateUser: state => state.user,
};
// Fonctions qui commit les mutations (changements d'état)
const actions = {
    // Fonction de création d'utilisateur.
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
      },
    // Fonction de connexion d'un utilisateur.
    async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit('setUser', User.get('username'))
      },
    // Fonction de création d'une publication.
    async CreatePost({dispatch}, post) {
        await axios.post('post', post)
        await dispatch('GetPosts')
      },
    // Fonction d'obtention de la liste des publications.
    async GetPosts({ commit }){
        let response = await axios.get('posts')
        commit('setPosts', response.data)
      },
    // fonction de déconnexion d'un utilisateur.
    async LogOut({commit}){
        let user = null
        commit('logout', user)
      }      
};
// Fonctions qui modifient les données (states)
const mutations = {
    setUser(state, username){
        state.user = username
    },
    setPosts(state, posts){
        state.posts = posts
    },
    LogOut(state){
        state.user = null
        state.posts = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
