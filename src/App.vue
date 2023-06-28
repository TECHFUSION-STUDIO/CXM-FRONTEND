<template>
  <router-view />
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
</script>
