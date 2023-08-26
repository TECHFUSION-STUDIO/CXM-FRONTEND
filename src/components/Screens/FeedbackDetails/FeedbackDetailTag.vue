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
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
export default {
  name: "FeedbackDetailTag",
  components: {
    MultiSelect,
  },
  data() {
    return {
      axioscon,
      id: this.$route.params.fid,
      options: [],
      items: [],
      searchText: "", // If value is falsy, reset searchText & searchItem
      lastSelectItem: {},
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    // this.fetchAllTags();
    // this.fetchFeedbackTags();
    this.fetchAllTags();
    this.fetchFeedbackTags();
  },

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
      this.submitAddTag();
    },
    fetchAllTags() {
      axioscon
        .get("/getalltag?businessId=1&projectId=1")
        .then((res) => {
          console.log(res);
          this.options = res.data.map((a) => {
            return {
              value: a.id,
              text: a.tagName,
            };
          });
          console.log(this.options);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchFeedbackTags() {
      console.log(this.id);
      axioscon
        .get(
          "/gettagsbyfeedbackid?businessId=" +
            1 +
            "&projectId=" +
            1 +
            "&feedbackId=" +
            this.id
        )
        .then((res) => {
          console.log(res.data);
          this.items = res.data.map((a) => {
            return {
              value: a.id,
              text: a.tagName,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    submitAddTag() {
      let selectedTagList = this.items.map((a) => a.value);
      console.log(selectedTagList);
      axioscon
        .post("/addfeedbacktags", {
          tagIdList: selectedTagList,
          feedbackId: this.id,
          businessId: "1",
          projectId: "1",
        })
        .then((res) => {
          console.log(res);
          this.fetchFeedbackTags();
          Swal.fire({
            toast: true,
            animation: false,
            text: "Tags updated successfully",
            icon: "success",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });
        })
        .catch((err) => {
          console.log(err);
          this.fetchFeedbackTags();
          Swal.fire({
            toast: true,
            animation: false,
            text: "Error Occured while updating tags",
            icon: "error",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });
        });
    },
  },
};
</script>

<style scoped></style>
