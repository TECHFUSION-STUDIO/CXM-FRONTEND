

import { reactive } from 'vue'

export const store = reactive({
  // IS_LOGGED_IN : (localStorage.getItem('jwt') != null)? true: false,
  IS_LOGGED_IN: true,
  selectedProject: ''
})