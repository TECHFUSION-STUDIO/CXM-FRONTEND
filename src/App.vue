<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* #feedbackTitle:hover {
  color: dodgerblue;
  text-decoration: underline;
  cursor: pointer;
} */

.zoombadge:hover {
  transform: scale(
    1.2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
