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
.form-control,
.form-select {
  border-radius: 2px;
}

.input-group-text {
  border-radius: 0px;
}
.btn {
  display: inline-block;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
}

th {
  font-weight: 500;
}

.dropdown-menu {
  border-radius: 2px;
  margin-top: 0px;
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
