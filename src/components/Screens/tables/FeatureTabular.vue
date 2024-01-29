<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-7">
        <button
          type="button"
          class="btn btn-primary btn-sm me-2 dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Sort
        </button>
        <form
          class="dropdown-menu p-3 shadow-lg"
          style="max-height: 400px; overflow: auto"
        >
          <div class="form-check" v-for="(item, index) in sortListItems" :key="index">
            <input
              class="form-check-input"
              type="radio"
              name="sortSelect"
              :id="item.value"
              :value="item.value"
              v-model="sortSelected"
            />
            <label class="form-check-label" :for="item.value">
              {{ item.name }}
            </label>
          </div>

          <hr />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="sortOrderSelect"
              id="sortOrder1"
              value="asc"
              v-model="sortOrder"
            />
            <label class="form-check-label" for="sortOrder1"> Low to High </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="sortOrderSelect"
              id="sortOrder2"
              value="desc"
              v-model="sortSelected"
            />
            <label class="form-check-label" for="sortOrder2"> High to Low </label>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-sm me-1 btn-primary">Reset</button>
            <button type="submit" class="btn btn-sm me-1 btn-primary">Apply</button>
          </div>
        </form>

        <button
          type="button"
          class="btn btn-primary btn-sm me-1 dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Filter
        </button>
        <form
          class="dropdown-menu p-4 shadow-lg"
          style="max-height: 400px; overflow: auto"
        >
          <div class="">
            <label class="form-label" for="subid">Tags</label>

            <multiselect
              tag-placeholder="Add this feature"
              placeholder=""
              label="featureName"
              track-by="id"
              :multiple="true"
              :taggable="true"
              @select="addTag"
              @remove="removeTag"
              :options="featureList"
              @open="openedDrop(item)"
            ></multiselect>
          </div>

          <div class="mt-2">
            <label class="form-label" for="subid">Assignee</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mt-2">
            <label class="form-label" for="subid">Reporter</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mt-2">
            <label class="form-label" for="subid">Creator</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="mt-2">
            <label class="form-label" for="subid">Category</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="mt-2">
            <label class="form-label" for="subid">Impact</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mt-2">
            <label class="form-label" for="subid">Effort</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mt-2">
            <label class="form-label" for="subid">Priority</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="mt-2">
            <label class="form-label" for="subid">Status</label>
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              id="subid"
            >
              <option v-for="item in constants.FEATURE_STATUS" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="mt-2">
            <label class="form-label" for="subid">Added Date</label>
            <div class="row">
              <div class="col-md-6">
                <label class="text-muted fst-italic" style="font-size: small" for="subid"
                  >Start Date</label
                >
                <input
                  class="form-control form-control-sm"
                  id="subid"
                  type="datetime-local"
                />
              </div>
              <div class="col-md-6">
                <label class="text-muted fst-italic" style="font-size: small" for="subid"
                  >End Date</label
                >
                <input
                  class="form-control form-control-sm"
                  id="subid"
                  type="datetime-local"
                />
              </div>
            </div>
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-sm me-1 btn-primary">Reset</button>
            <button type="submit" class="btn btn-sm me-1 btn-primary">Apply</button>
          </div>
        </form>
      </div>
      <div class="col-md-5 mx-auto">
        <div class="input-group mt-2">
          <input
            class="form-control"
            type="search"
            placeholder="Search Feature"
            aria-label="Search"
          />
          <button class="btn btn-primary">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="table-responsive-md mt-3">
      <table class="table table-hover table-bordered mt-4 w-100 shadow-sm">
        <thead>
          <tr class="bg-light">
            <th style="width: 40%">Feature</th>
            <th class="text-center">Status</th>
            <th class="text-center">Category</th>
            <th class="text-center">Impact</th>
            <th class="text-center">Effort</th>
            <th class="text-center">Priority</th>
            <th class="text-center">Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in featureList" :key="item.id">
            <td style="width: 40%">
              <a id="feedbackTitle" @click="this.$router.push('/feature/' + item.id)">{{
                item.name
              }}</a>
            </td>
            <td class="text-center">
              <span class="text-success fw-bold">{{ item.status }}</span>
            </td>
            <td class="text-center">
              {{ item.category != null ? item.category.categoryName : null }}
            </td>
            <td class="text-center">
              {{ item.impact }}
            </td>
            <td class="text-center">
              {{ item.effort }}
            </td>
            <td class="text-center">
              {{ item.priority }}
            </td>
            <td class="text-center">56</td>
          </tr>
          <tr v-if="featureList.length == 0">
            <td class="text-center" colspan="7"><i>No Data Found</i></td>
          </tr>
          <tr class="bg-light" v-if="featureList.length > 0">
            <td colspan="9">
              <div class="d-flex">
                <div class="me-auto"></div>

                <div class="me-3">
                  Showing
                  <select class="border border-0">
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                  </select>
                  of 21
                </div>

                <div>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-sm btn-outline-primary">
                      &lt;&lt;
                    </button>
                    <button type="button" class="btn btn-sm btn-primary pt-1">3</button>
                    <button type="button" class="btn btn-sm btn-outline-primary">
                      &gt;&gt;
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { constants } from "../constants";

export default {
  name: "FeatureTabular",
  props: ["calledFrom"],
  data() {
    return {
      featureList: [],
      endpoint: "",
      showCreateFeatureMenu: false,
      axiosConn,
      constants,
      sortListItems: [
        {
          name: "Impact",
          value: "impact",
        },
        {
          name: "Effort",

          value: "effort",
        },
        {
          name: "Priority",

          value: "priority",
        },
        {
          name: "Added Date",

          value: "createdAt",
        },
        {
          name: "Updated Date",

          value: "updatedAt",
        },
      ],
      sortSelected: "",
      sortOrder: "asc",
    };
  },

  mounted() {
    this.endpoint = "businessId=1&workspaceId=1";

    this.fetchAllFeature();
  },

  methods: {
    fetchAllFeature() {
      axiosConn
        .get("/findFeature?" + this.endpoint)
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
