<template>
  <div>
    <div class="bg-light shadow shadow-sm p-3">
      <p>Created at :</p>
      <p>0 Comments</p>
      <p>0 Backing Customers</p>
      <hr />
      <p>
        <label for="customRange1" class="form-label">Status :</label>
        <model-select
          :options="statusSelect.options"
          v-model="statusSelect.item"
          class="form-control border border-2 border-info"
        />
      </p>
      <p>
        <label for="customRange1" class="form-label">Assigned Board :</label>
        <model-select
          :options="assignedBoardSelect.options"
          v-model="assignedBoardSelect.item"
          placeholder="placeholder text"
          class="form-control border border-2 border-info"
        />
      </p>
      <!-- @searchchange="printSearchText1" -->

      <p>
        <label for="customRange1" class="form-label">Assigned to :</label>
        <model-select
          :options="assignedToSelect.options"
          v-model="assignedToSelect.item"
          placeholder="placeholder text"
          class="form-control border border-2 border-info"
        />
      </p>

      <p>
        <label for="customRange1" class="form-label">Assigned By :</label>
        <input type="text" class="form-control" />
      </p>

      <p>
        <label for="customRange1" class="form-label">Category :</label>
        <model-select
          :options="categorySelect.options"
          v-model="categorySelect.item"
          placeholder="placeholder text"
          class="form-control border border-2 border-info"
        />
      </p>
      <hr />
      <p>
        <label for="customRange1" class="form-label">Logger Id :</label>

        <input class="form-control" disabled />
      </p>

      <p>
        <label for="customRange1" class="form-label">Posted By :</label>

        <input class="form-control" disabled />
      </p>

      <p>
        <label for="customRange1" class="form-label">Owned By :</label>
        <input class="form-control" disabled />
      </p>

      <hr />
      <div class="row">
        <div class="col-md-4">
          <label for="customRange1" class="form-label">Priority</label>
          <select class="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="customRange1" class="form-label">Impact</label>
          <select class="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="customRange1" class="form-label">Effort </label>
          <select class="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <hr />
      <p>Nice To Have Voters : 10</p>
      <p>Important Voters : 10</p>

      <p>Critical Voters : 10</p>
    </div>
  </div>
</template>

<script>
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
// import axiosConn from "@/axioscon";
import FeedbackMixin from "../mixins/FeedbackMixin";
import { FeedbackStore } from "../mixins/FeedbackStore";

export default {
  name: "FeedbackDetailAssignment",
  components: {
    ModelSelect,
  },
  mixins: [FeedbackMixin],
  data() {
    return {
      id: this.$route.params.fid,
      assignedBoardSelect: {
        options: [],
        item: {},
        searchText: "",
      },

      assignedToSelect: {
        options: [],
        item: {},
        searchText: "",
      },

      categorySelect: {
        options: [],
        item: {},
        searchText: "",
      },

      statusSelect: {
        options: [
          { value: "OPEN", text: "OPEN" },
          { value: "DONE", text: "DONE" },
          { value: "PLANNED", text: "PLANNED" },
          { value: "FILTERED", text: "FILTERED" },
          { value: "CLOSED", text: "CLOSED" },
        ],
        item: {},
        searchText: "",
      },
      FeedbackStore,
    };
  },

  mounted() {
    this.id = this.$route.params.fid;
    // this.fetchFeedbackDetail();
    console.log(this.FeedbackStore.feedbackDetails);

    console.log(this.FeedbackStore.allCategory);
    this.categorySelect.options = this.FeedbackStore.allCategory.map((a) => {
      return {
        text: a.categoryName,
        value: a.id,
      };
    });

    this.assignedBoardSelect.options = this.FeedbackStore.allBoards.map((a) => {
      return {
        text: a.boardName,
        value: a.id,
      };
    });
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
