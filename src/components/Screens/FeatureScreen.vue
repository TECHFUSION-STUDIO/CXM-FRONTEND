<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Features <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <button
            class="btn btn-primary mt-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
            @click.prevent="showCreateFeatureMenu = true"
          >
            Create Feature
          </button>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-3"></div>
      </div>
      <FeatureTabular :calledFrom="'featureId'" />
    </div>

    <div
      class="offcanvas offcanvas-end"
      :class="showCreateFeatureMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showCreateFeatureMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Create Feature</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <CreateFeatureScreen
            type="offcanvas"
            @success="showCreateFeatureMenu = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import CreateFeatureScreen from "./CreateFeatureScreen.vue";
import FeatureTabular from "./tables/FeatureTabular.vue";
export default {
  name: "FeatureScreen",
  components: {
    CreateFeatureScreen,
    FeatureTabular,
  },
  data() {
    return {
      showCreateFeatureMenu: false,
      axiosConn,
    };
  },

  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
