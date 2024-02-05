<template>
  <div>
    <div class="text-end">
      <button
        class="btn btn-sm btn-primary m-1"
        @click="this.$router.push('/surveys/' + id + '/createquestion')"
      >
        Add Question
      </button>
    </div>

    <div class="table-responsive-md mt-2">
      <table class="table table-bordered table-hover mt-4 w-100 shadow-sm">
        <thead>
          <tr class="bg-light">
            <th style="width: 40%">Question</th>
            <th>Type</th>
            <th>Status</th>
            <th>Created Time</th>
            <!-- <td class="text-center">Detail</td> -->
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
                >{{ item.question }}</a
              >
            </td>
            <td>{{ item.type }}</td>
            <td>
              <span class="text-success fw-bold">{{ item.status }}</span>
            </td>
            <td>{{ item.createdAt }}</td>
          </tr>
          <tr v-if="surveyFormQuestionDetail.length == 0">
            <td class="text-center" colspan="8"><i>No Data Found</i></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="false">
      <h6>Showing Questions Details</h6>
      <RatingQuestionDetail />

      <NPSQuestionDetail />

      <InputTextQuestionDetail />

      <SingleChoiceQuestionDetail />
    </div>
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
        .get("/findQuestion?businessId=1&workspaceId=1&formId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyFormQuestionDetail = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    showQuestionDetail(item) {
      this.showQuestionDetailMenu = true;
      this.questionDetail = item;
      axiosConn
        .get("/findQuestion?businessId=1&workspaceId=1&id=" + item.id)
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
