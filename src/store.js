

import { reactive } from 'vue'

export const store = reactive({
  // isLoggedIn : (localStorage.getItem('jwt') != null)? true: false,
  isLoggedIn: true,
})