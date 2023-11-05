<template>
  <div class="bgmi">
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="row w-100">
        <div class="col-md-7 p-5">
          <h5 class="navbar-nav"><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
          <h5 class="mt-5">Create Account</h5>
          <div class="mt-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label fw-medium"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label fw-medium"
                >Full Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="John"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label fw-medium"
                >Password</label
              >
              <div class="input-group">
                <input
                  :type="!showPassword ? 'password' : 'text'"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="*****"
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
              <button class="btn btn-primary w-100">Create Account</button>
            </div>
            <div class="mb-3 mt-2 fst-italic">
              <span class="text-muted">
                By signing up you agree to FeedArc
                <router-link to="/signup" style="text-decoration: none">
                  <a class="text-danger" style="font-size: 14px; text-decoration: none"
                    >terms</a
                  >
                </router-link>
                and
                <router-link to="/signup" style="text-decoration: none">
                  <a class="text-danger" style="font-size: 14px; text-decoration: none"
                    >privacy policy</a
                  >
                </router-link></span
              >
            </div>
            <div class="mb-3 mt-2">
              Alreay have an account?
              <router-link to="/login" style="text-decoration: none">
                <a class="text-danger" style="font-size: 14px; text-decoration: none"
                  >Login</a
                >
              </router-link>
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
  name: "SignupScreen",

  data() {
    return {
      showPassword: false,

      axioscon,
    };
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
