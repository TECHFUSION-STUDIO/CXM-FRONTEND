<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          :class="activeItem == 1 ? 'nav-link active' : 'nav-link'"
          @click="
            this.$router.push('/surveys/' + id + '/surveysettings/general');
            activeItem = 1;
          "
          >General</a
        >
      </li>
      <li class="nav-item">
        <a
          :class="activeItem == 3 ? 'nav-link active' : 'nav-link'"
          @click="
            this.$router.push('/surveys/' + id + '/surveysettings/question');
            activeItem = 3;
          "
          >Questions</a
        >
      </li>
      <li class="nav-">
        <a
          :class="activeItem == 2 ? 'nav-link active' : 'nav-link'"
          @click="
            this.$router.push('/surveys/' + id + '/surveysettings/integration');
            activeItem = 2;
          "
          >Integration</a
        >
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "SurveySettingScreen",
  data() {
    return {
      id: "",
      activeItem: 1,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    if (window.location.href.includes("/general")) {
      this.activeItem = 1;
    } else if (window.location.href.includes("/integration")) {
      this.activeItem = 2;
    } else if (window.location.href.includes("/question")) {
      this.activeItem = 3;
    }
    console.log(this.activeItem);
  },
};
</script>

<style lang="scss" scoped></style>
