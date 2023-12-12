<template>
  <div>
    <v-container>
      <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
    </v-container>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Surveys <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <!-- <button class="btn btn-primary mt-2">Create Survey</button> -->
          <v-btn size="small" @click="this.$router.push('/createsurveys')">
            Create Survey</v-btn
          >
        </div>
        <div class="col-md-6">
          <!-- <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Services"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div> -->
          <v-card-text>
            <v-text-field
              :loading="loading"
              density="compact"
              variant="outlined"
              label="Search templates"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Survey Name</td>

              <td class="text-center">Status</td>
              <td>Last Response</td>
              <td>Tot Response</td>
              <td>Added DateTime</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in surveyFormList" :key="item.id">
              <td style="width: 40%">
                <a id="feedbackTitle" @click="this.$router.push('/surveys/' + item.id)">{{
                  item.surveyFormName
                }}</a>
              </td>
              <td class="text-center">
                <span class="text-success fw-bold">{{ item.surveyFormStatus }}</span>
              </td>
              <td>vs</td>

              <td></td>
              <td>{{ item.addedDateTime }}</td>
            </tr>
            <tr v-if="surveyFormList.length == 0">
              <td class="text-center" colspan="5"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>

        <v-table fixed-header height="300px">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "SurveyScreen",
  data() {
    return {
      surveyFormList: [],
      axiosConn,
    };
  },
  mounted() {
    this.fetchAllSurveyForm();
  },
  methods: {
    fetchAllSurveyForm() {
      axiosConn
        .get("/getSurveyForm?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.surveyFormList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
