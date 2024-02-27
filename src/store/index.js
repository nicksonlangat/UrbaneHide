import { createStore } from 'vuex'
import Api from '@/services/Api'
export default createStore({
  state: {
    cartTotal: 0,
    cartItems: [],
  },
  getters: {
    getCartTotal(state) {
      return state.cartTotal
    },
    getCartItems(state) {
      return state.cartItems
    },
  },
  mutations: {
    updateCartTotal(state, payload) {
      state.cartTotal = payload.total
    },
    updateCartItems(state, payload) {
      state.cartItems = payload.products
    },
  },
  actions: {
    async registerUser({ commit }, { data, cb, errorCallback }) {
      return  await Api('application/json', false)
          .post('/register/', data)
          .then((response) => {
              if (cb) {
                  cb(response.data)
              }
          })
          .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
  },
  async loginUser({ commit }, { data, cb, errorCallback }) {
    return await Api('application/json', false)
        .post('/login', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
                localStorage.setItem("exery", JSON.stringify(response.data))
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
        
},
async getUser({ commit }, {id, cb}) {
  return await Api()
      .get(`/users/${id}`)
      .then((response) => {
          if (cb) {
              cb(response.data)
          }
      })
      .catch((error) => console.log(error))
},
async changePassword({ commit }, { data, cb, errorCallback }) {
    return await Api('application/json', true)
        .put('/change/password/', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
},
async postResetPassword({ commit }, { data, cb, errorCallback }) {
    return await Api('application/json', false)
        .post('/reset/password/', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
},
async putResetPassword({ commit }, { data, cb, errorCallback }) {
    return await Api('application/json', false)
        .put('/reset/password/', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
},
async getProducts({ commit }, {cb}) {
  return await Api()
      .get('/products/')
      .then((response) => {
          if (cb) {
              cb(response.data)
          }
      })
      .catch((error) => console.log(error))
},
async getOrders({ commit }, {cb}) {
  return await Api()
      .get(`/orders/`)
      .then((response) => {
          if (cb) {
              cb(response.data)
          }
      })
      .catch((error) => console.log(error))
},
async getTransactions({ commit }, {cb}) {
  return await Api()
      .get(`/transactions/`)
      .then((response) => {
          if (cb) {
              cb(response.data)
          }
      })
      .catch((error) => console.log(error))
},
async newOrder({ commit }, {cb, data, errorCallback}) {
    return await Api()
        .post('/orders/', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
  },
  async newTransaction({ commit }, {cb, data, errorCallback}) {
    return await Api()
        .post('/transactions/', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
  },
  async uploadProduct({ commit }, { data, cb, errorCallback }) {
    return await Api('multipart/formdata')
        .post('/products/', data)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
        })
        .catch((error) => {
            if(errorCallback) {
                errorCallback(error)
            }
        })
      
      },
  },
  modules: {
  }
})
