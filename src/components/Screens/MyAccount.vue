<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>

          <li class="breadcrumb-item active" aria-current="page">My Account</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Profile Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberName"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Profile Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberName"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Profession</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberEmail"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Contact</label>
            <input
              type="tel"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberContact"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Twitter</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberName"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">LinkedIn</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberName"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Website url</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="memberName"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Member Role</label
            >
            <select class="form-select" v-model="memberRole">
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
            </select>
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Member Status</label
            >
            <select class="form-select" v-model="memberStatus">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div class="text-center mt-4 mb-4">
        <button class="btn btn-outline-danger m-2 w-25">Reset</button>
        <button class="btn btn-outline-success m-2 w-25" @click="createMember()">
          Submit
        </button>
      </div>
    </div>
  </div>

  <div></div>
</template>

<script>
export default {
  name: "MyAccount",
};
</script>

<style lang="scss" scoped></style>
