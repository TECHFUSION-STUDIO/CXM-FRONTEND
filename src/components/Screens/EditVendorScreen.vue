<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/vendor')">Vendor </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Edit Vendor</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditVendorScreen",
};
</script>

<style lang="scss" scoped></style>
