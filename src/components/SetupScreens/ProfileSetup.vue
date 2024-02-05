<template>
  <div class="mt-5">
    <h5>Profile Setup</h5>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Profile Email<i class="fa-solid fa-envelope ms-2"></i
          ></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileEmail"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Profile Name<i class="fa-solid fa-signature ms-2"></i
          ></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileName"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Profession<i class="fa-solid fa-user-tie ms-2"></i
          ></label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileProfession"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Contact<i class="fa-solid fa-phone ms-2"></i
          ></label>
          <input
            type="tel"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileContact"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Twitter<i class="fa-brands fa-square-twitter ms-2"></i
          ></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileTwitter"
          />
        </div>
      </div>

      <div class="col-md-4">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >LinkedIn<i class="fa-brands fa-linkedin ms-2"></i
          ></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileLinkedin"
          />
        </div>
      </div>

      <div class="col-md-4">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Website url<i class="fa-solid fa-globe ms-2"></i
          ></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="profileUrl"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="text-center mt-4">
          <button class="btn btn-primary w-25" @click="completeProfileSetup()">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSetup",
  data() {
    return {
      profileUrl: "",
      profileLinkedin: "",
      profileTwitter: "",
      profileContact: "",
      profileProfession: "",
      profileName: "",
      profileEmail: "",
    };
  },
  methods: {
    completeProfileSetup() {
      this.$emit("target", "workspace");
    },
  },
};
</script>

<style lang="scss" scoped></style>
