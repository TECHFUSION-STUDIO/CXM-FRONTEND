<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <h5 class="navbar-nav me-auto ms-2">
        <i class="fa-solid fa-florin-sign me-2"></i> FeedArc
      </h5>
      <div class="d-flex" role="search">
        <div class="w-100">
          <div class="dropdown-center">
            <button
              class="btn btn-outline-secondary btn-sm dropdown-toggle shadow-none"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="text-truncate d-inline p-0 m-0" style="width: 200px">
                {{ item == null || item == {} ? "Select Workspace" : item.name }}</span
              >
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end dropdown-menu-sm-end dropdown-menu-md-end shadow mt-0"
              style="max-width: 100%"
            >
              <li v-for="i in options" :key="i.id" @click="item = i">
                <a class="dropdown-item text-truncate" :title="i.name" href="#"
                  >{{ i.name }}
                </a>
              </li>

              <li><hr class="dropdown-divider" /></li>

              <li class="text-center" @click="this.$router.push('/createproject')">
                <a class="dropdown-item text-truncate"
                  ><i class="fa-solid fa-folder-plus me-1"></i>Create Workspace</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from "@/store";
import axioscon from "../axioscon.js";
export default {
  name: "HeaderComponent",
  data() {
    return {
      openDrawer: false,
      screenShort: false,
      selectedTab: 0,
      headerTitle: "",
      options: [],
      item: {},
      searchText: "",
      store,
      sideBarMenu: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: "fa-solid fa-house ",
        },
        {
          title: "Survey",
          url: "/surveys",
          icon: "fa-solid fa-comment-dots",
        },
        { title: "Epic", url: "/feature", icon: "fa-regular fa-snowflake" },
        { title: "Reporter", url: "/logger", icon: "fa-solid fa-address-book" },

        { title: "Category", url: "/category", icon: "fa-solid fa-code-branch" },
        { title: "Tags", url: "/tags", icon: "fa-sharp fa-solid fa-tags" },
        { title: "Member", url: "/member", icon: "fa-solid fa-people-group" },
        { title: "hr", url: " ", icon: " " },
        { title: "My Account", url: "/account", icon: "fa-solid fa-user" },
        { title: "Log out", url: "/login", icon: "fa-solid fa-arrow-right-from-bracket" },
      ],
      axioscon,
    };
  },
  mounted() {
    this.fetchProjects();
  },
  watch: {
    item: function (oldItem, newItem) {
      if (oldItem != newItem) {
        store.selectedProject = this.item;
      }
    },
  },
  methods: {
    fetchProjects() {
      axioscon
        .get("/findWorkspace?businessId=" + 1)
        .then((res) => {
          console.log(res);
          this.options = res.data.data;
          this.item = this.options[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    printSearchText(searchText) {
      this.searchText = searchText;
    },
  },
};
</script>

<style lang="scss" scoped></style>
