<template>
  <div>
    <div class="table-responsive-md mt-3">
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
              {{
                item.featureCategory != null ? item.featureCategory.categoryName : null
              }}
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
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "FeatureTabular",
  props: ["calledFrom"],
  data() {
    return {
      featureList: [],
      endpoint: "",
      showCreateFeatureMenu: false,
      axiosConn,
    };
  },

  mounted() {
    if (this.calledFrom != "" && this.calledFrom != null) {
      if (this.calledFrom == "featureId") {
        // this.id = this.$route.params.featureId;
        this.endpoint = "businessId=1&projectId=1";
      } else if (this.calledFrom == "boardId") {
        this.endpoint = "businessId=1&projectId=1&boardId=" + this.$route.params.boardId;
      }
      this.fetchAllFeature();
    }
  },
  methods: {
    fetchAllFeature() {
      axiosConn
        .get("/getFeature?" + this.endpoint)
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
