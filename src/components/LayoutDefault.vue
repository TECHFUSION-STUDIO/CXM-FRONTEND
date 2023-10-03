<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        v-if="this.store.isLoggedIn && !screenShort"
        type="button"
        id="sidebarCollapse"
        class="btn btn-primary"
        @click="openDrawer ? (openDrawer = false) : (openDrawer = true)"
      >
        <i class="fas fa-align-left"></i>
      </button>

      <h5 class="navbar-nav me-auto ms-3">
        <i class="fa-solid fa-florin-sign me-2"></i> FeedArc
      </h5>
      <div class="d-flex" role="search">
        <div class="w-100">
          <model-select
            :options="options"
            v-model="item"
            placeholder="Select a Project"
            @searchchange="printSearchText"
            class="form-control border border-2 border-info"
          >
          </model-select>
        </div>
      </div>
    </div>
  </nav>
  <div class="d-flex" style="background-color: #0262b9; min-height: 4px">
    <div class="ms-auto text-white p-1" style="font-size: 14px">
      <span class="me-2" style="cursor: pointer" @click="this.$router.push('/account')"
        >MY PROFILE</span
      >
      |
      <span class="me-2 ms-2" style="cursor: pointer">SUPPORT</span>
    </div>
  </div>
  <div class="wrapper bg-light">
    <!-- Sidebar  -->
    <nav
      v-if="this.store.isLoggedIn"
      id="sidebar"
      :class="openDrawer ? 'active' : ''"
      style="overflow-y: auto; height: 100vh; background-color: #dee2e6"
    >
      <ul class="list-group mt-1 border rounded-0 border-0">
        <li
          :class="
            selectedTab == 1
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1 '
          "
          @click="
            selectedTab = 1;
            this.$router.push('/dashboard');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold"><i class="fa-solid fa-house me-2"></i>Dashboard</div>
          </div>
        </li>
        <li
          :class="
            selectedTab == 2
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 2;
            this.$router.push('/surveys');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-comment-dots me-2"></i>Surveys
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 3
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 3;
            this.$router.push('/logger');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-address-book me-2"></i>Loggers
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 5
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 5;
            this.$router.push('/board');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-diagram-project me-2"></i>Boards
            </div>
          </div>
        </li>
        <li
          :class="
            selectedTab == 4
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 4;
            this.$router.push('/category');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-code-branch me-2"></i>Category
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 6
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 6;
            this.$router.push('/tags');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold"><i class="fa-sharp fa-solid fa-tags me-2"></i>Tags</div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 7
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start hovered mt-1'
          "
          @click="
            selectedTab = 7;
            this.$router.push('/projectmember');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-people-group me-2"></i>Project Members
            </div>
          </div>
        </li>

        <hr style="color: black" />

        <li
          :class="
            selectedTab == 8
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 8;
            this.$router.push('/vendor');
          "
          style="cursor: default"
        >
          <div class="me-auto w-100">
            <div class="fw-bold">
              <i class="fa-solid fa-building me-2"></i>Manage Vendors
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 9
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 9;
            this.$router.push('/generalmember');
          "
          style="cursor: default"
        >
          <div class="me-auto w-100">
            <div class="fw-bold">
              <i class="fa-solid fa-people-group me-2"></i>General Members
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 10
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start   hovered mt-1'
          "
          @click="
            selectedTab = 10;
            this.$router.push('/login');
          "
          style="cursor: default"
        >
          <div class="me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Log Out
            </div>
          </div>
        </li>

        <li style="cursor: default" v-show="false">
          <div class="accordion accordion-flush mt-1" id="accordionsurvey">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed rounded-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsesurvey"
                  aria-expanded="false"
                  aria-controls="flush-collapsesurvey"
                >
                  Surveys
                </button>
              </h2>
              <div
                id="flush-collapsesurvey"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionsurvey"
              >
                <div class="accordion-body">
                  <button class="btn btn-light w-100 text-start" type="button">
                    <i class="fa-solid fa-people-group me-2"></i>General Members
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt-1" id="accordionlogger">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapselogger"
                  aria-expanded="false"
                  aria-controls="flush-collapselogger"
                >
                  Loggers
                </button>
              </h2>
              <div
                id="flush-collapselogger"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionlogger"
              >
                <div class="accordion-body">
                  <button class="btn btn-light w-100 text-start" type="button">
                    <i class="fa-solid fa-people-group me-2"></i>View Loggers
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush mt-1" id="accordioncategory">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsecategory"
                  aria-expanded="false"
                  aria-controls="flush-collapsecategory"
                >
                  Category
                </button>
              </h2>
              <div
                id="flush-collapsecategory"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordioncategory"
              >
                <div class="accordion-body">
                  <button class="btn btn-light w-100 text-start" type="button">
                    <i class="fa-solid fa-people-group me-2"></i>View Category
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt-1" id="accordiontags">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsetags"
                  aria-expanded="false"
                  aria-controls="flush-collapsetags"
                >
                  Tags
                </button>
              </h2>
              <div
                id="flush-collapsetags"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordiontags"
              >
                <div class="accordion-body">
                  <button class="btn btn-light w-100 text-start" type="button">
                    <i class="fa-solid fa-people-group me-2"></i>View Tags
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush mt-1" id="accordionprojectmember">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseprojectmember"
                  aria-expanded="false"
                  aria-controls="flush-collapseprojectmember"
                >
                  Project Members
                </button>
              </h2>
              <div
                id="flush-collapseprojectmember"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionprojectmember"
              >
                <div class="accordion-body">
                  <button class="btn btn-light w-100 text-start" type="button">
                    <i class="fa-solid fa-people-group me-2"></i>View Members
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <div>
        <div class="p-2">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
import axioscon from "../axioscon.js";
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "DashboardApp",
  components: {
    ModelSelect,
  },
  data() {
    return {
      openDrawer: false,
      screenShort: false,
      selectedTab: null,
      headerTitle: "",
      options: [
        { value: "91", text: "aa" + " - " + "1" },

        { value: "24", text: "BIKANERI BHATERWALI SEVRICES" + " - " + "9" },
      ],
      item: {},
      searchText: "",
      store,
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
        .get("/getallprojects?businessId=" + 1)
        .then((res) => {
          console.log(res);
          this.options = res.data.map((a) => {
            return { text: a.projectName, value: a.id };
          });
          if (this.options != null && this.options.length > 0)
            this.item = this.options[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    printSearchText(searchText) {
      this.searchText = searchText;
    },
    titleDetector() {
      if (window.location.href.includes("dashboard")) {
        this.headerTitle = "Dashboard";
      } else if (window.location.href.includes("viewfeedback")) {
        this.headerTitle = "View Feedback";
      } else if (window.location.href.includes("rawfeedback")) {
        this.headerTitle = "Manage Raw Feedback";
      } else if (window.location.href.includes("createfeedback")) {
        this.headerTitle = "Create Feedback";
      } else if (window.location.href.includes("createreleasenotes")) {
        this.headerTitle = "Create Release Notes ";
      } else if (window.location.href.includes("createboard")) {
        this.headerTitle = "Create Board ";
      } else if (window.location.href.includes("createproject")) {
        this.headerTitle = "Create New Project ";
      } else if (window.location.href.includes("createmember")) {
        this.headerTitle = "Add Member ";
      } else if (window.location.href.includes("feedbacksource")) {
        this.headerTitle = "Feedback Source ";
      } else if (window.location.href.includes("feedbackloggerdetail")) {
        this.headerTitle = "View Feedback Logger Detail";
      } else if (window.location.href.includes("projectsettings")) {
        this.headerTitle = "Project Settings ";
      } else if (window.location.href.includes("generalsettings")) {
        this.headerTitle = "General Settings";
      } else if (window.location.href.includes("tags")) {
        this.headerTitle = "Manage Tags";
      } else if (window.location.href.includes("category")) {
        this.headerTitle = "Manage Category";
      } else if (window.location.href.includes("feedback")) {
        this.headerTitle = "Manage Feedback";
      } else if (window.location.href.includes("logger")) {
        this.headerTitle = "Manage Loggers";
      } else if (window.location.href.includes("projectmembers")) {
        this.headerTitle = "Manage Project Members";
      } else if (window.location.href.includes("members")) {
        this.headerTitle = "Manage Members";
      } else if (window.location.href.includes("releasenotes")) {
        this.headerTitle = "Manage Release Notes";
      } else if (window.location.href.includes("createreleaseboard")) {
        this.headerTitle = "Create Release Boards";
      } else if (window.location.href.includes("releaseboard")) {
        this.headerTitle = "Manage Release Boards";
      } else if (window.location.href.includes("board")) {
        this.headerTitle = "Manage  Boards";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"; */

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  padding: 0px;
  margin: 0px;
  width: 100%;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  color: #fff;
  transition: all 0.3s;
  /* padding-left: 5px;
  padding-right: 5px; */
  padding-bottom: 5px;
  padding-top: 0px;
}

#sidebar.active {
  margin-left: -250px;
}

/* #sidebar .sidebar-header {
  padding: 5px;
}

#sidebar ul.components {
  border-bottom: 1px solid #47748b;
} */

/* #sidebar ul p {
  color: #fff;
  padding: 10px;
} */

.hovered {
  background-color: rgba(255, 255, 255, 0);
  border-width: 0px;
  color: #000;
}

.hovered:hover {
  /* background-color: #e0f3ff; */
  color: #0262b9;
}

.hovered-active {
  background-color: #e0f3ff;
  color: #0262b9;
  border-left-color: #0262b9;
  border-left-width: 4px;
  z-index: 3;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  /* padding: 10px; */
  overflow-y: auto;

  min-height: 89vh;
  height: 89vh;
  transition: all 0.3s;
  background-color: #edf0f2;
}

.dropdown-menu-wide {
  min-width: 100%;
  text-align: center;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }

  #sidebar.active {
    margin-left: 0;
  }

  #sidebarCollapse span {
    display: none;
  }
}
</style>
