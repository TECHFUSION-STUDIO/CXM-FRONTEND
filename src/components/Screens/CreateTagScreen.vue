<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Tags </a></li>

          <li class="breadcrumb-item active" aria-current="page">Create New Tag</li>
        </ol>
      </nav>
    </div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-2">
            <label class="form-label" for="tagName">Tag Name</label>
            <input type="text" id="tagName" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-2">
            <label class="form-label" for="tagStatus">Tag Status</label>
            <select id="tagStatus" class="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTagScreen",
};
</script>

<style lang="scss" scoped></style>
