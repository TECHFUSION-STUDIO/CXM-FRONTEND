<template>
  <div>
    <div class="mt-2 p-3">
      <h2>Hi, Avi Kumar</h2>
      <div class="row mt-4">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Feedback Added</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Members Added</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <DropdownOption
        :finalList="finalList"
        @searchText="updateSearch"
        @selectedText="updateSelect"
      />
      <TagOption
        :finalList="finalList"
        @searchText="updateSearch"
        @selectedText="updateSelect"
        :selectedOptions="['dawD', 'FCSACFV']"
      />

      <label for="exampleDataList" class="form-label">Datalist example</label>
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        autocomplete="off"
      />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </div>
  </div>
</template>

<script>
// import axiosConn from "@/axioscon";
import DropdownOption from "./charts/DropdownOption.vue";

import TagOption from "./charts/TagOption.vue";
export default {
  name: "DashboardScreen",
  components: {
    DropdownOption,
    TagOption,
  },
  data() {
    return {
      finalList: [
        "dawD",
        "FCSACFV",
        "JNUTYRGFHNJ",
        "CEWSAE",
        "VBDR",
        "JNUTYRGFHNJ v svscvscv sv savvv adcsv  svasvasvs vfcacfaacfs savaesvv da eabab aevbeab ",
      ],
    };
  },

  mounted() {},
  methods: {
    updateSearch(a) {
      console.log(a);
      this.finalList.push("1", "3");
    },
    updateSelect(a) {
      console.log(a);
    },
  },
};
</script>

<style scoped></style>
