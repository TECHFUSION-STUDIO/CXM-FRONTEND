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
          <ProfileSetup @target="setActivePage" />
        </div>
        <div class="mt-5" v-if="activePage == 'workspace'">
          <WorkspaceSetup @target="setActivePage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../axioscon";
import ProfileSetup from "./SetupScreens/ProfileSetup.vue";
import WorkspaceSetup from "./SetupScreens/WorkspaceSetup.vue";

export default {
  name: "SetupScreen",
  components: {
    ProfileSetup,
    WorkspaceSetup,
  },
  data() {
    return {
      axioscon,
      activePage: "profile",
    };
  },
  updated() {
    console.log(this.activePage);
  },
  methods: {
    migrate() {},
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
    setActivePage(a) {
      this.activePage = a;
    },
  },
};
</script>

<style>
body {
  background-color: #edf0f2;
  overflow-y: auto;
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
