<template>
  <div class="bgmi">
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="row w-100">
        <div class="col-md-7 p-5">
          <div v-if="!linkSendSuccess">
            <h5><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
            <h5 class="mt-5">Forgot Password</h5>
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
              <div class="mb-3 mt-4 text-center">
                <button class="btn btn-primary w-100" :disabled="!this.isEmailValid">
                  Send Password Reset Link
                </button>
              </div>
              <div class="mb-3 mt-2">
                <p class="text-center">
                  <a
                    href="/login"
                    class="text-primary"
                    style="font-size: 14px; text-decoration: none"
                    ><i class="fa-solid fa-arrow-left me-2"></i>Go Back To Login</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div v-else class="mt-5 text-center">
            <span class="fs-1">
              <i class="fa-solid fa-envelope-circle-check"></i>
            </span>
            <h5 class="mt-3">Password Reset Email Sent</h5>
            <p class="text-muted">Email sent to {{ email }} .</p>
            <p class="text-muted">
              <i> Please open the mail and click on the rest link. </i>
            </p>
            <p>
              <a
                href="/forgotPassword"
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
  name: "ForgotPasswordScreen",

  data() {
    return {
      email: "",
      password: "",
      isEmailValid: false,
      linkSendSuccess: false,
      axioscon,
    };
  },
  updated() {
    console.log(this.email.trim().length <= 3);
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
