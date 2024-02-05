<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Linked Feature</h6>

      <div class="mt-3" id="collapseAddTag">
        <multiselect
          v-model="value"
          placeholder="Search or add Feature"
          label="name"
          track-by="id"
          :options="options"
          :multiple="true"
          :taggable="true"
          @remove="removeTag"
          @select="addTag"
        ></multiselect>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../../../axioscon.js";
import Multiselect from "vue-multiselect";

import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
export default {
  name: "ResponseFeature",
  components: {
    Multiselect,
  },
  data() {
    return {
      axioscon,
      id: this.$route.params.fid,
      options: [],
      value: [],
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    this.fetchAllFeature();
    this.fetchFeedbackFeature();
  },
  methods: {
    removeTag(newTag) {
      console.log("addTag called");
      console.log(newTag);
      this.submitAddTag();
    },
    addTag(selectedOption, id) {
      console.log(selectedOption + id);
      this.submitAddTag();
    },
    fetchAllFeature() {
      axioscon
        .get("/findFeature?businessId=1&workspaceId=1")
        .then((res) => {
          console.log(res.data);
          this.options = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchFeedbackFeature() {
      console.log(this.id);
      axioscon
        .get("/findFeature?workspaceId=1&businessId=1&responseId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.value = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    submitAddTag() {
      let selectedTagList = this.value.map((a) => a.id);
      console.log(selectedTagList);
      axioscon
        .post("/createFeatureResponse", {
          featureId: selectedTagList,
          responseId: this.id,
          businessId: "1",
          workspaceId: "1",
          addedBy: "",
        })
        .then((res) => {
          console.log(res);
          this.fetchFeedbackFeature();
          Swal.fire({
            toast: true,
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
          this.fetchFeedbackFeature();
          Swal.fire({
            toast: true,
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
