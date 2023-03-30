/*
 * @Author: yz
 * @Date: 2022-06-08 15:42:48
 * @Description: 
 * 
 */
const state = {
  isCollapse: false,
  loading: false,
  dataItem: {},
  mobile: false,
  window_innerWidth: undefined,
		window_innerHeight: undefined,
}

const mutations = {
  windowResize(state, params) { //是一个函数
    let {
      innerWidth,
      innerHeight
    } = window
    state.window_innerWidth = innerWidth
    state.window_innerHeight = innerHeight

    state.mobile = state.window_innerWidth < 768 ? true : false;
  },
  setCollapse(state, val) {
    state.isCollapse = val;
  }
}

const actions = {
  setCollapse({
    commit
  }, val) {
    commit("setCollapse", val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
