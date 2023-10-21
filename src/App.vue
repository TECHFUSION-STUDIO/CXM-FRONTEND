<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style lang="css">
/* #feedbackTitle:hover {
  color: dodgerblue;
  text-decoration: underline;
  cursor: pointer;
} */

.btn-primary {
  background-color: #0262b9;
}

.btn-danger {
  background-color: #d62015;
}

a {
  cursor: pointer;
}

.zoombadge:hover {
  transform: scale(
    1.2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
