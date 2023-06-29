<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Tags</h6>

      <div class="mt-3" id="collapseAddTag">
        <multi-select
          :options="options"
          :selected-options="items"
          placeholder="select item"
          @select="onSelect"
        >
        </multi-select>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../../../axioscon.js";
import { MultiSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "FeedbackDetailTag",
  props: ["feedback"],
  components: {
    MultiSelect,
  },
  data() {
    return {
      feedbackDetails: this.feedback,
      tagSearch: {
        searchValue: this.feedback.tags,
        dataListItems: [],
      },
      tagList: [],
      axioscon,
      id: "",
      options: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" },
        { value: "6", text: "ef" + " - " + "6" },
        { value: "7", text: "ef" + " - " + "7" },
        { value: "8", text: "ef" + " - " + "8" },
        { value: "9", text: "ef" + " - " + "9" },
        { value: "10", text: "ef" + " - " + "10" },
        { value: "11", text: "ef" + " - " + "11" },
        { value: "12", text: "ef" + " - " + "12" },
        { value: "13", text: "down case" + " - " + "testcase" },
        { value: "14", text: "camel case" + " - " + "testCase" },
        { value: "15", text: "Capitalize case" + " - " + "Testcase" },
      ],
      searchText: "", // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {},
    };
  },
  // mounted() {
  //   this.id = this.$route.params.fid;
  //   console.log(this.feedbackDetails);
  //   console.log(this.id);
  //   this.fetchAllTags();
  //   // this.fetchFeedbackTags();
  // },

  // beforeRouteUpdate(to, from, next) {
  //   console.log("Before Route Update" + to.params.fid);

  //   this.id = to.params.fid;

  //   console.log(this.id);
  //   this.fetchAllTags();
  //   // this.fetchFeedbackTags();

  //   next();
  // },

  methods: {
    onSelect(items, lastSelectItem) {
      this.items = items;
      this.lastSelectItem = lastSelectItem;
    },
  },
};
</script>

<style scoped></style>
