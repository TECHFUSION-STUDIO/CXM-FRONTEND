<template>
  <div>
    <div class="table-responsive-md mt-3">
      <table class="table table-hover table-bordered mt-4 w-100 shadow-sm">
        <thead>
          <tr class="bg-light">
            <th style="width: 40%">Feature</th>
            <th class="text-center">Status</th>
            <th class="text-center">Category</th>
            <th class="text-center">Impact</th>
            <th class="text-center">Effort</th>
            <th class="text-center">Priority</th>
            <th class="text-center">Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in featureList" :key="item.id">
            <td style="width: 40%">
              <a id="feedbackTitle" @click="this.$router.push('/feature/' + item.id)">{{
                item.name
              }}</a>
            </td>
            <td class="text-center">
              <span class="text-success fw-bold">{{ item.status }}</span>
            </td>
            <td class="text-center">
              {{ item.category != null ? item.category.categoryName : null }}
            </td>
            <td class="text-center">
              {{ item.impact }}
            </td>
            <td class="text-center">
              {{ item.effort }}
            </td>
            <td class="text-center">
              {{ item.priority }}
            </td>
            <td class="text-center">56</td>
          </tr>
          <tr v-if="featureList.length == 0">
            <td class="text-center" colspan="7"><i>No Data Found</i></td>
          </tr>
          <tr class="bg-light" v-if="featureList.length > 0">
            <td colspan="9">
              <div class="d-flex">
                <div class="me-auto"></div>

                <div class="me-3">
                  Showing
                  <select class="border border-0">
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                  </select>
                  of 21
                </div>

                <div>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-sm btn-outline-primary">
                      &lt;&lt;
                    </button>
                    <button type="button" class="btn btn-sm btn-primary pt-1">3</button>
                    <button type="button" class="btn btn-sm btn-outline-primary">
                      &gt;&gt;
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { constants } from "../constants";

export default {
  name: "FeatureTabular",
  props: ["calledFrom"],
  data() {
    return {
      featureList: [],
      endpoint: "",
      showCreateFeatureMenu: false,
      axiosConn,
      constants,
    };
  },

  mounted() {
    this.endpoint = "businessId=1&workspaceId=1";

    this.fetchAllFeature();
  },

  methods: {
    fetchAllFeature() {
      axiosConn
        .get("/findFeature?" + this.endpoint)
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
