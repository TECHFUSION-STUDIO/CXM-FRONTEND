<template>
  <div>
    <section class="bkgnd">
      <div class="p-5 m-0 text-center text-lg-start row" style="height: 100vh">
        <div class="col-lg-7 align-items-center">
          <div class="w-75 text-center">
            <h1 class="my-5 display-3 fw-bold ls-tight">
              The best genie <br />
              <span class="text-primary">Every Feedback Matters</span>
            </h1>
            <p style="color: hsl(217, 10%, 50.8%)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque
              accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate
              quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>
          </div>
        </div>
        <div class="col-lg-5 align-items-center">
          <div class="card h-100">
            <div>
              <button
                :class="
                  isLogin
                    ? ' btn btn-info w-50 rounded-0'
                    : ' btn btn-light w-50 rounded-0'
                "
                @click="isLogin = true"
              >
                Login
              </button>
              <button
                :class="
                  !isLogin
                    ? ' btn btn-info w-50 rounded-0'
                    : ' btn btn-light w-50 rounded-0'
                "
                @click="isLogin = false"
              >
                Register
              </button>
            </div>

            <div class="card-body py-5 px-md-5" v-if="isLogin">
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example2">Business Id</label>

                <div class="input-group mb-2">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-building-columns"></i
                  ></span>
                  <input
                    type="number"
                    id="form3Example1"
                    class="form-control"
                    v-model="gymId"
                  />
                </div>
              </div>
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example2">User Id</label>

                <div class="input-group mb-2">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-id-badge"></i
                  ></span>
                  <input
                    type="text"
                    id="form3Example2"
                    class="form-control"
                    v-model="userId"
                  />
                </div>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Password</label>

                <div class="input-group mb-2">
                  <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                  <input
                    :type="!isEyeEnable ? 'password' : 'text'"
                    id="form3Example4"
                    class="form-control"
                    v-model="password"
                  />
                  <span class="input-group-text bg-white"
                    ><i
                      v-if="isEyeEnable"
                      class="fa-solid fa-eye-slash"
                      @click="isEyeEnable = false"
                    ></i>
                    <i
                      v-else
                      @click="isEyeEnable = true"
                      class="fa-sharp fa-solid fa-eye"
                    ></i
                  ></span>
                </div>
              </div>

              <!-- Submit button -->
              <div class="text-center">
                <button
                  type="button "
                  @click="this.$router.push('/dashboard')"
                  :disabled="disableSubmit"
                  class="btn btn-primary btn-block mb-4"
                >
                  Log In
                </button>
              </div>
              <p class="mt-2 mb-2 text-center text-danger" v-if="isError">
                <i class="fa-solid fa-triangle-exclamation"></i> Invalid Login
              </p>
            </div>

            <div class="card-body py-5 px-md-5" v-if="!isLogin">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="form-outline">
                <div class="input-group mb-2">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-signature"></i
                  ></span>
                  <input
                    type="text"
                    id="form3Example1"
                    class="form-control"
                    v-model="businessName"
                  />
                </div>

                <label class="form-label" for="form3Example1">Business Name</label>
              </div>

              <div class="form-outline">
                <div class="input-group mb-2">
                  <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                  <input
                    type="tel"
                    id="form3Example1"
                    class="form-control"
                    v-model="businessContact"
                  />
                </div>

                <label class="form-label" for="form3Example1">Business Contact</label>
              </div>

              <div class="form-outline">
                <div class="input-group mb-2">
                  <span class="input-group-text"><i class="fa-solid fa-key"></i></span>
                  <input
                    type="email"
                    id="form3Example1"
                    class="form-control"
                    v-model="businessEmail"
                    :disabled="isOTPVerified"
                  />
                  <span>
                    <button v-if="!isOTPVerified" class="btn btn-info" @click="sendOtp()">
                      Send OTP
                    </button></span
                  >
                </div>

                <label class="form-label" for="form3Example1">Business Email</label>
              </div>

              <div class="form-outline">
                <div class="input-group mb-2">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-envelope"></i
                  ></span>
                  <input
                    type="number"
                    id="form3Example1"
                    class="form-control"
                    v-model="businessOTP"
                  />
                  <span>
                    <button class="btn btn-info" @click="verifyOtp()">
                      Verify
                    </button></span
                  >
                </div>

                <label class="form-label" for="form3Example1">Enter OTP</label>
              </div>

              <div class="form-outline">
                <div class="input-group mb-2">
                  <span class="input-group-text"
                    ><i class="fa-solid fa-earth-americas"></i
                  ></span>
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    v-model="businessCountry"
                  >
                    <option value="India">India</option>
                    <option value="United States of America">
                      United States of America
                    </option>
                    <option value="England">England</option>
                  </select>
                </div>

                <label class="form-label" for="form3Example1">Business Country</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <div class="input-group mb-2">
                  <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                  <input
                    :type="!isEyeEnable ? 'password' : 'text'"
                    id="form3Example4"
                    class="form-control"
                    v-model="businessPassword"
                  />
                  <span class="input-group-text bg-white"
                    ><i
                      v-if="isEyeEnable"
                      class="fa-solid fa-eye-slash"
                      @click="isEyeEnable = false"
                    ></i>
                    <i
                      v-else
                      @click="isEyeEnable = true"
                      class="fa-sharp fa-solid fa-eye"
                    ></i
                  ></span>
                </div>

                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <!-- Confirm Password input -->
              <div class="form-outline mb-4">
                <div class="input-group mb-2">
                  <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                  <input
                    :type="!isConfirmEyeEnable ? 'password' : 'text'"
                    id="form3Example4"
                    class="form-control"
                    v-model="businessConfirmPassword"
                  />
                  <span class="input-group-text bg-white"
                    ><i
                      v-if="isConfirmEyeEnable"
                      class="fa-solid fa-eye-slash"
                      @click="isConfirmEyeEnable = false"
                    ></i>
                    <i
                      v-else
                      @click="isConfirmEyeEnable = true"
                      class="fa-sharp fa-solid fa-eye"
                    ></i
                  ></span>
                </div>

                <label class="form-label" for="form3Example4">Confirm Password</label>
              </div>

              <!-- Submit button -->
              <div class="text-center">
                <button
                  v-if="isLogin"
                  type="button "
                  @click="submit()"
                  :disabled="disableSubmit"
                  class="btn btn-primary btn-block mb-4"
                >
                  Log In
                </button>

                <button
                  v-if="!isLogin"
                  type="button "
                  @click="registerBusiness()"
                  class="btn btn-primary btn-block mb-4"
                >
                  Register
                </button>
              </div>
              <p class="mt-2 mb-2 text-center text-danger" v-if="isError">
                <i class="fa-solid fa-triangle-exclamation"></i> Invalid Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axioscon from "../axioscon";

export default {
  name: "LoginLogup",

  data() {
    return {
      isLogin: true,

      axioscon,
    };
  },

  methods: {},
};
</script>

<style scoped>
.bkgnd {
  background-image: url("../assets/loginimage.jpg");
}
</style>
