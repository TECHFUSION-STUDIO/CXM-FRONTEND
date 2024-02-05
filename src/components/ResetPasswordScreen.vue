<template>
  <div class="bgmi">
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="row w-100">
        <div class="col-md-7 p-5">
          <h5><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
          <h5 class="mt-5">Reset Password</h5>
          <div class="mt-3">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label fw-medium"
                >New Password</label
              >
              <div class="input-group">
                <input
                  :type="!showPassword ? 'password' : 'text'"
                  v-model="password"
                  :class="isPasswordValid ? 'form-control is-valid' : 'form-control'"
                  id="exampleFormControlInput1"
                  placeholder="*****"
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
              <i class="text-muted" style="font-size: 12px"
                >Password should contain 1 uppercase, 1 lowercase, 1 numeric and 1 special
                character and should not be less than 8 characters</i
              >
            </div>
            <div class="mb-3 mt-4 text-center">
              <button
                class="btn btn-primary w-100"
                href="/login"
                :disabled="!isPasswordValid"
              >
                Reset
              </button>
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
  name: "ResetPasswordScreen",

  data() {
    return {
      isPasswordValid: false,
      password: "",
      showPassword: false,
      axioscon,
    };
  },
  updated() {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (this.password.match(passwordRegex)) {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
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
