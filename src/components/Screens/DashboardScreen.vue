<template>
  <div>{{ top }}</div>
</template>

<script>
// import axiosConn from "@/axioscon";
export default {
  name: "DashboardScreen",

  data() {
    return { top: {} };
  },
  mounted() {
    this.getDa();
  },
  methods: {
    getDa() {
      try {
        if (
          "browsingTopics" in document &&
          document.featurePolicy.allowsFeature("browsing-topics")
        ) {
          console.log(document.browsingTopics());
        }
      } catch (e) {
        console.error("Could not call topics API", e);
      }
      console.log(document.browsingTopics());
    },
  },
};
</script>

<style scoped></style>
