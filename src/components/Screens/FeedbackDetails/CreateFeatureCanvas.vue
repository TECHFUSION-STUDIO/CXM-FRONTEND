<template>
  <div>
    <div
      class="offcanvas offcanvas-end"
      :class="showMenu ? 'show' : ''"
      :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Create Feature</h5>
        <button
          type="button"
          class="btn-close"
          @click.prevent="
            this.showMenu ? (this.showMenu = false) : (this.showMenu = true)
          "
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>I will not close if you click outside of me.</div>
      </div>
    </div>

    <!-- <div
      class="offcanvas offcanvas-start"
      :class="showMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="">Offcanvas with backdrop</h5>
        <button
          type="button"
          class="btn-close text-reset"
          @click.prevent="showOffcanvasMenu()"
        ></button>
      </div>
      <div class="offcanvas-body">
        <p>.....</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CreateFeatureCanvas",
  props: ["smenu"],
  data() {
    return {
      showMenu: this.smenu,
    };
  },
  updated() {
    console.log(this.showMenu);
  },
};
</script>

<style lang="scss" scoped></style>
