<template>
  <div class="bgmi">
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="row w-100">
        <div class="col-md-7 p-5">
          <h5><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
          <h5 class="mt-5">Login</h5>
          <div class="mt-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Password</label>
              <div class="input-group">
                <input
                  :type="!showPassword ? 'password' : 'text'"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="*****"
                  v-model="password"
                  required
                />

                <span class="input-group-text bg-white">
                  <i
                    @mousedown="showPassword = true"
                    @mouseup="showPassword = false"
                    :class="
                      !showPassword
                        ? 'fa-sharp fa-solid fa-eye'
                        : 'fa-sharp fa-solid fa-eye-slash'
                    "
                  ></i
                ></span>
              </div>
            </div>
            <div class="mb-3 mt-4 text-center">
              <button
                class="btn btn-primary w-100"
                :disabled="!this.isEmailValid || this.password.trim().length < 8"
              >
                Login
              </button>
            </div>

            <div class="mb-3 d-flex mt-2 text-end">
              <div class="me-auto p-2">
                Don't have account?<router-link
                  to="/signup"
                  style="text-decoration: none"
                >
                  <a class="text-danger" style="font-size: 14px; text-decoration: none">
                    Sign up</a
                  >
                </router-link>
              </div>
              <div class="p-2">
                <router-link to="/forgotPassword" style="text-decoration: none">
                  <a class="text-danger" style="font-size: 14px; text-decoration: none"
                    >Forgot password?</a
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 bkg bg-secondary"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../axioscon";

export default {
  name: "LoginScreen",

  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      isEmailValid: false,
      axioscon,
    };
  },
  updated() {
    console.log(window.navigator);
    console.log(this.email.trim().length <= 3);
    console.log(this.password.trim().length < 8);
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (this.email.match(emailRegex)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  },
  methods: {},
};
</script>

<style>
body {
  background-color: #edf0f2;
}
.dialog {
  width: 75%;
}

.bkg {
  background-image: url("../assets/logo.png");
}

@media (max-width: 768px) {
  .dialog {
    width: 100%;
  }
}
.heading {
  font-family: Syne, sans-serif;
}
</style>
