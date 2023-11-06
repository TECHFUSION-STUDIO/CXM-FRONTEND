<template>
  <div class="bgmi" style="overflow: auto">
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="row w-100">
        <div class="col-md-7 p-5">
          <h5><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
          <div v-if="createAccountForm">
            <h5 class="mt-5">Create Account</h5>
            <div class="mt-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label fw-medium"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="email"
                  :class="isEmailValid ? 'form-control is-valid' : 'form-control'"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label fw-medium"
                  >Full Name</label
                >
                <input
                  type="text"
                  v-model="fullName"
                  :class="isFullNameValid ? 'form-control is-valid' : 'form-control'"
                  id="exampleFormControlInput1"
                  placeholder="John"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fw-medium"
                  >Password</label
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
                  >Password should contain 1 uppercase, 1 lowercase, 1 numeric and 1
                  special character and should not be less than 8 characters</i
                >
              </div>
              <div class="mb-3 mt-4 text-center">
                <button
                  class="btn btn-primary w-100"
                  :disabled="!isEmailValid && !isFullNameValid && !isPasswordValid"
                  @click="createAccount()"
                >
                  Create Account
                </button>
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
          <div v-else class="mt-5 text-center">
            <span class="fs-1">
              <i class="fa-solid fa-envelope-circle-check"></i>
            </span>
            <h5 class="mt-3">Verification Email Sent</h5>
            <p class="text-muted">Email sent to {{ email }} to for verification.</p>
            <p class="text-muted">
              <i> Please open the mail and click on the verification link. </i>
            </p>
            <p>
              <a
                href="/signup"
                class="text-primary"
                style="font-size: 14px; text-decoration: none"
                ><i class="fa-solid fa-arrow-left me-2"></i>Go Back</a
              >
            </p>
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
      email: "",
      password: "",
      fullName: "",
      isEmailValid: false,
      isPasswordValid: false,
      isFullNameValid: false,
      createAccountForm: true,
      axioscon,
    };
  },
  updated() {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (this.email.match(emailRegex)) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
    if (this.password.match(passwordRegex)) {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
    if (this.fullName.length > 2) {
      this.isFullNameValid = true;
    } else {
      this.isFullNameValid = false;
    }
  },
  methods: {
    createAccount() {
      this.createAccountForm = false;
    },
  },
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
</style>
