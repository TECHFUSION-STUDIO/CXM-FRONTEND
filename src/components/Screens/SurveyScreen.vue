<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Surveys <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <button
            class="btn btn-primary mt-2 shadow"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
            @click.prevent="showCreateFormMenu = true"
          >
            Create Survey
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Services"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100 shadow-sm">
          <thead>
            <tr class="bg-light">
              <th style="width: 40%">Survey Name</th>
              <th class="text-center">Status</th>
              <th>Last Response</th>
              <th>Tot Response</th>
              <th>Added DateTime</th>
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
                <!-- {{ item.surveyFormStatus }} -->
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

        <!-- <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
  </div>

  <div
    class="offcanvas offcanvas-end"
    data-bs-backdrop="static"
    :class="showCreateFormMenu ? 'show' : ''"
    tabindex="-1"
    :style="{ visibility: showCreateFormMenu ? 'visible' : 'hidden' }"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Create Form</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="showCreateFormMenu = false"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <CreateSurveyScreen type="offcanvas" @success="showCreateFormMenu = false" />
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import CreateSurveyScreen from "./CreateSurveyScreen.vue";
export default {
  name: "SurveyScreen",
  components: { CreateSurveyScreen },
  data() {
    return {
      surveyFormList: [],
      showCreateFormMenu: false,
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
