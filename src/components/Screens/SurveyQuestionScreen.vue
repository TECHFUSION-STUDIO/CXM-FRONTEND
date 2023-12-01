<template>
  <div>
    <div class="d-flex mb-2">
      <div class="me-auto">
        <h6>Survey Questions</h6>
      </div>
      <!-- <div class="p-2">Flex item</div> -->
      <div>
        <button
          class="btn btn-sm btn-primary"
          @click="this.$router.push('/surveys/' + id + '/createquestion')"
        >
          Add Question
        </button>
      </div>
    </div>

    <div class="table-responsive-md mt-2">
      <table class="table table-bordered table-hover mt-4 w-100">
        <thead>
          <tr class="bg-light">
            <td style="width: 40%">Question</td>
            <td>Type</td>
            <td>Status</td>
            <td>Created Time</td>
            <td class="text-center">Detail</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in surveyFormQuestionDetail" :key="item.id">
            <td>
              <a
                id="feedbackTitle"
                @click.prevent="showQuestionDetail(item)"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdropQuestionDetail"
                aria-controls="staticBackdropQuestionDetail"
                >{{ item.surveyQuestion }}</a
              >
            </td>
            <td>{{ item.surveyQuestionType }}</td>
            <td>
              <span class="text-success fw-bold">{{ item.surveyQuestionStatus }}</span>
            </td>
            <td>{{ item.addedDateTime }}</td>
            <td class="text-center">
              <i class="fa-solid fa-circle-info" style="cursor: pointer"></i>
            </td>
          </tr>
          <tr v-if="surveyFormQuestionDetail.length == 0">
            <td class="text-center" colspan="8"><i>No Data Found</i></td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr class="mt-5 mb-5" />

    <h6>Showing Questions Details</h6>
    <RatingQuestionDetail />

    <NPSQuestionDetail />

    <InputTextQuestionDetail />

    <SingleChoiceQuestionDetail />

    <div
      class="offcanvas offcanvas-end"
      :class="showQuestionDetailMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showQuestionDetailMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      id="staticBackdropQuestionDetail"
      aria-labelledby="staticBackdropQuestionDetailLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropQuestionDetailLabel">
          Question Detail
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click.prevent="
            showQuestionDetailMenu = false;
            questionDetail = {};
          "
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <p class="text-muted">
            <i>Question Id : {{ questionDetail.id }}</i>
          </p>
          <h6>{{ questionDetail.surveyQuestion }}</h6>
          <ol class="list-group list-group-numbered">
            <li
              v-for="item in questionDetail.surveyQuestionOptions"
              class="list-group-item"
              :key="item.id"
            >
              {{ item.optionValue }}
            </li>
          </ol>
          <div class="mt-3">
            <span class="fw-medium">Status : </span>
            <span class="text-success fw-bold">{{
              questionDetail.surveyQuestionStatus
            }}</span>
          </div>
          <div class="mt-2">
            <span class="fw-medium">Type : </span>{{ questionDetail.surveyQuestionType }}
          </div>

          <div class="mt-2">
            <span class="fw-medium">Category : </span
            >{{ questionDetail.surveyQuestionCategory }}
          </div>

          <div class="mt-2">
            <span class="fw-medium">Is Required? : </span>
            {{ questionDetail.surveyQuestionRequired ? "Yes" : "No" }}
          </div>
          <div class="mt-2">
            <span class="fw-medium">Last Updated on : </span>
            {{ questionDetail.lastModifiedDateTime }}
          </div>

          <div class="mt-2">
            <span class="fw-medium">Added on : </span>{{ questionDetail.addedDateTime }}
          </div>

          <div class="text-end mt-3">
            <button
              class="btn btn-primary btn-sm m-1"
              @click="
                this.$router.push('/surveys/' + id + '/editquestion/' + questionDetail.id)
              "
            >
              Edit Question
            </button>

            <button class="btn btn-outline-danger btn-sm m-1">Delete Question</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import NPSQuestionDetail from "./questionAnalysisDetail/NPSQuestionDetail.vue";
import InputTextQuestionDetail from "./questionAnalysisDetail/InputTextQuestionDetail.vue";
import SingleChoiceQuestionDetail from "./questionAnalysisDetail/SingleChoiceQuestionDetail.vue";
import RatingQuestionDetail from "./questionAnalysisDetail/RatingQuestionDetail.vue";
export default {
  name: "SurveyQuestionScreen",
  components: {
    NPSQuestionDetail,
    InputTextQuestionDetail,
    SingleChoiceQuestionDetail,
    RatingQuestionDetail,
  },
  data() {
    return {
      id: "",
      surveyFormQuestionDetail: [{}],
      showQuestionDetailMenu: false,
      questionDetail: {},
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchSurveyQuestion();
  },

  methods: {
    fetchSurveyQuestion() {
      axiosConn
        .get("/getSurveyQuestion?businessId=1&projectId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyFormQuestionDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    showQuestionDetail(item) {
      this.showQuestionDetailMenu = true;
      this.questionDetail = item;
      axiosConn
        .get("/getSurveyQuestion?businessId=1&projectId=1&surveyQuestionId=" + item.id)
        .then((res) => {
          console.log(res.data);
          this.questionDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
