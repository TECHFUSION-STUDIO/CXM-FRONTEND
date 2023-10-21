<template>
  <div>
    <multiselect
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
      :multiple="true"
      :taggable="true"
      @select="addTag"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "DashboardScreen",
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
    };
  },
  updated() {},
  methods: {
    addTag(selectedOption, id) {
      console.log(selectedOption + id);
    },
  },
};
</script>

<style scoped></style>
