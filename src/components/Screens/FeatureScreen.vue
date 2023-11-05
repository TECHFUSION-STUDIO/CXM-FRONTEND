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
      <!-- <div class="table-responsive-md mt-3">
        <div class="w-50">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Feature"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feature</td>
              <td class="text-center">Status</td>
              <td class="text-center">Category</td>

              <td class="text-center">Impact</td>
              <td class="text-center">Effort</td>
              <td class="text-center">Priority</td>
              <td class="text-center">Strength</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in featureList" :key="item.id">
              <td style="width: 40%">
                <a id="feedbackTitle" @click="this.$router.push('/feature/' + item.id)">{{
                  item.featureName
                }}</a>
              </td>
              <td class="text-center">
                <span class="text-success fw-bold">{{ item.featureStatus }}</span>
              </td>
              <td class="text-center">
                {{ item.featureCategory }}
              </td>
              <td class="text-center">
                {{ item.featureImpact }}
              </td>
              <td class="text-center">
                {{ item.featureEffort }}
              </td>
              <td class="text-center">
                {{ item.featurePriority }}
              </td>
              <td class="text-center">56</td>
            </tr>
            <tr v-if="featureList.length == 0">
              <td class="text-center" colspan="7"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div> -->
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
          @click.prevent="showCreateFeatureMenu = false"
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
