import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

import App from '@/layout/App'

// 独立 Vue 构造函数
const localVue = createLocalVue()

localVue.use(Vuex)

describe('App.vue', () => {
  let actions
  let store

  let wrapper

  beforeEach(() => {
    actions = {
      initAuth: jest.fn() // 伪造函数
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Call store action "initAuth" ', () => {
    wrapper = shallow(App, { store, localVue })
    expect(actions.initAuth).toHaveBeenCalled()
  })

  it('Has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
