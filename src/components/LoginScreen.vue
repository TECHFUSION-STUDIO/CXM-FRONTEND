<template>
  <div class="bgmi">
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="row w-100">
        <div class="col-md-7 p-5">
          <h5 class="navbar-nav"><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
          <h5 class="mt-5">Login</h5>
          <div class="mt-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3 mt-4 text-center">
              <button class="btn btn-primary w-100">Login</button>
            </div>

            <div class="mb-3 mt-2 text-end">
              <router-link to="/signup" style="text-decoration: none">
                <a class="text-danger" style="font-size: 14px; text-decoration: none"
                  >Forgot password?</a
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
  name: "LoginScreen",

  data() {
    return {
      isLogin: true,

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
