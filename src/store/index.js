
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:[],
    headerks:[],
    inputValue: '',
    listl:[],
    collection:"0",
    abc:[],
    sort:''
  },
  getters: {
  },
  mutations: {
    updatecollection(state,co){
      state.collection=co
    },
    updatesort(state,sor){
      state.sort=sor
    },
    updateuser(state,userna){
      state.user=userna
    },
    updateabc(state,ac){
      state.abc =ac
    },
    updateInputValue(state, num) {
      state.inputValue = num;
    },
    addList(state,itemld){
      state.listl=itemld
    },
  },
  actions: {
    addToCart({commit},item) {
      commit('addToCart',item)
   },
   del_item({commit},id) {
      commit('DEL_ITEM',id)
   }
  },
  modules: {
    inputValue: state => state.inputValue
  }
})
