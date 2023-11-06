<template>
  <div>
    <div
      class="bg-white shadow shadow-sm p-2 dialog mx-auto position-absolute top-50 start-50 translate-middle"
    >
      <div class="w-100 p-5">
        <h5 class="mb-5"><i class="fa-solid fa-florin-sign"></i> FeedArc</h5>
        <div class="position-relative mt-4 m-4">
          <div
            class="progress"
            role="progressbar"
            aria-label="Progress"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 1px"
          >
            <div
              class="progress-bar"
              :style="
                activePage == 'profile'
                  ? 'width:0%'
                  : activePage == 'workspace'
                  ? 'width:50%'
                  : activePage == 'plan'
                  ? 'width:100%'
                  : 'width:50%'
              "
            ></div>
          </div>
          <button
            type="button"
            class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
            style="width: 2rem; height: 2rem"
          >
            1
          </button>
          <button
            type="button"
            :class="
              activePage == 'workspace' || activePage == 'plan'
                ? 'position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill'
                : 'position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill'
            "
            style="width: 2rem; height: 2rem"
          >
            2
          </button>
          <button
            type="button"
            :class="
              activePage == 'plan'
                ? 'position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill'
                : 'position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill'
            "
            style="width: 2rem; height: 2rem"
          >
            3
          </button>
        </div>
        <div class="mt-5" v-if="activePage == 'profile'">
          <h5>Profile Setup</h5>
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Profile Email<i class="fa-solid fa-envelope ms-2"></i
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberName"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Profile Name<i class="fa-solid fa-signature ms-2"></i
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberName"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Profession<i class="fa-solid fa-user-tie ms-2"></i
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberEmail"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Contact<i class="fa-solid fa-phone ms-2"></i
                ></label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberContact"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Twitter<i class="fa-brands fa-square-twitter ms-2"></i
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberName"
                />
              </div>
            </div>

            <div class="col-md-4">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >LinkedIn<i class="fa-brands fa-linkedin ms-2"></i
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberName"
                />
              </div>
            </div>

            <div class="col-md-4">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Website url<i class="fa-solid fa-globe ms-2"></i
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberName"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="text-center mt-4">
                <button class="btn btn-primary w-25" @click="completeProfileSetup()">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5" v-if="activePage == 'workspace'">
          <h5>Workspace Setup</h5>
          <p class="text-muted"><i>Please create a workspace to proceed</i></p>
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Enter Workspace Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="memberName"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Workspace Category</label
                >
                <select class="form-select" aria-label="Default select example">
                  <option value="1">Sports</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-md-12">
              <div class="text-center mt-4">
                <button class="btn btn-primary m-1 w-25" @click="backToProfileSetup()">
                  Back
                </button>
                <button
                  class="btn btn-primary m-1 w-25"
                  @click="completeWorkspaceSetup()"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5" v-if="activePage == 'plan'">
          <h5>Plan Setup</h5>

          <div class="mt-4">
            We have enrolled you to a 15 days <b>free</b> trial on our Basic Plan.
          </div>

          <div class="row mt-4 mb-3">
            <div class="col-md-12">
              <p class="text-muted fs-5"><i>Basic Plan</i></p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">2 Surveys</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">5 Questions/Surveys</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">500 Responses/Month</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">1 Member/Month</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">10 Boards</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">100 Feature</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">20 Vendors</p>
            </div>

            <div class="col-md-3 text-center">
              <p class="p-3 border">500 Feedback/Month</p>
            </div>
            <div class="col-md-3 text-center">
              <p class="p-3 border">500 Feedback/Month</p>
            </div>
          </div>

          <div>
            Check details of all our plans ( Basic , Business , Enterprise ).
            <a href="#">View all Plans</a>
          </div>
          <div>
            <div class="text-center mt-4">
              <button class="btn btn-primary m-1 w-25" @click="backToWorkspaceSetup()">
                Back
              </button>
              <button class="btn btn-primary m-1 w-25" @click="completePlanSetup()">
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../axioscon";

export default {
  name: "SetupScreen",

  data() {
    return {
      axioscon,
      activePage: "plan",
    };
  },

  methods: {
    completeProfileSetup() {
      this.activePage = "workspace";
    },
    backToProfileSetup() {
      this.activePage = "profile";
    },
    completeWorkspaceSetup() {
      this.activePage = "plan";
    },
    backToWorkspaceSetup() {
      this.activePage = "workspace";
    },
    completePlanSetup() {
      this.$router.push("/");
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
  min-height: 85%;
}

@media (max-width: 768px) {
  .dialog {
    width: 100%;
  }
}
</style>
