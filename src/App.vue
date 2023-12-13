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

.btn {
  border-radius: 2px;
}
.btn {
  display: inline-block;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
}

.btn::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 25%;
  height: 100%;
  width: 50%;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: all ease-in-out 0.5s;
  transform: scale(5, 5);
}

.btn:active::after {
  padding: 0;
  margin: 0;
  opacity: 0.2;
  transition: 0s;
  transform: scale(0, 0);
}

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

input[class="form-control"]:disabled {
  background: #ffffff;
}
</style>
