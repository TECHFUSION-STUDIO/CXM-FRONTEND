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

      <v-row class="mt-2">
        <v-col sm="12" md="12" xs="12" lg="12" xl="12"
          ><v-card
            title="Feedback Added"
            text="With supporting text below as a natural lead-in to additional content."
          >
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm="12" md="12" xs="12" lg="12" xl="12"
          ><v-card title="Card title" text="...">
            <v-card-actions>
              <v-btn>Click me</v-btn>
            </v-card-actions>
          </v-card>
        </v-col></v-row
      >
      <!-- =======

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
>>>>>>> f908bc142a217f3369bfd839bf76dc55f1ea3dc1-->
    </div>
  </div>
</template>

<script>
// import axiosConn from "@/axioscon";
// import DropdownOption from "./charts/DropdownOption.vue";

// import TagOption from "./charts/TagOption.vue";
export default {
  name: "DashboardScreen",
  // components: {
  //   DropdownOption,
  //   TagOption,
  // },
  data() {
    return {
      finalList: ["dawD", "FCSACFV", "JNUTYRGFHNJ", "CEWSAE", "VBDR"],
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
