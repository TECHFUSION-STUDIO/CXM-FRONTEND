<template>
  <div>
    <!-- <h4>Welcome to Memeber Screen</h4> -->
    <div class="p-2 bg-white shadow shadow-sm mt-2" v-if="false">
      <button class="btn btn-success mt-2" @click="this.$router.push('/createmembers')">
        <i class="fa-regular fa-square-plus me-2"></i>Add Member
      </button>
    </div>
    <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive" v-if="false">
      <div class="row w-100">
        <div class="col-md-3">
          <input
            class="form-control m-1"
            type="email"
            placeholder="Email"
            v-model="searchVal"
          />
        </div>
        <div class="col-md-3">
          <input
            class="form-control m-1"
            type="text"
            placeholder="Name"
            aria-label="Search"
            v-model="searchVal"
          />
        </div>
        <div class="col-md-3">
          <select class="form-select m-1">
            <option>Admin</option>
            <option>Member</option>
          </select>
        </div>
        <div class="col-md-3">
          <button class="btn btn-outline-success m-1">
            <i class="fa-regular fa-square-plus me-2"></i>Submit
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive">
      <div class="row w-100">
        <div class="col-md-3">
          <button
            class="btn btn-primary mt-2"
            @click="this.$router.push('/createmember')"
          >
            Create Member
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Tag"
              aria-label="Search"
            />
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      <table class="table table-hover mt-3">
        <thead>
          <tr class="bg-light">
            <td>Email</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Role</td>
            <td>Status</td>
            <td>Added at</td>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in memberList" :key="item.id">
            <td>
              <span
                id="feedbackTitle"
                @click="this.$router.push('/memberdetail/' + item.id)"
                >{{ item.teamMemberEmail }}</span
              >
            </td>
            <td>{{ item.teamMemberName }}</td>

            <td>{{ item.teamMemberContact }}</td>
            <td>
              {{ item.teamMemberRole }}
            </td>
            <td>
              {{ item.teamMemberStatus }}
            </td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="q-pa-md">
      <q-table
        flat
        bordered
        title="Treats"
        :rows="memberList"
        :columns="columns"
        row-key="name"
        :hide-pagination="true"
        :no-data-label="'No Data Found'"
      />
    </div>
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";

export default {
  name: "GeneralMemberScreen",
  data() {
    return {
      columns: [
        {
          name: "teamMemberEmail",
          required: true,
          label: "Email",
          align: "left",
          field: (row) => row.teamMemberEmail,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "teamMemberName",
          align: "center",
          label: "Name",
          field: "teamMemberName",
          sortable: true,
        },
        {
          name: "teamMemberContact",
          label: "Contact",
          align: "center",
          field: "teamMemberContact",
          sortable: true,
        },
        {
          name: "teamMemberRole",
          label: "Role ",
          field: "teamMemberRole",
          align: "center",
        },
        {
          name: "teamMemberStatus",
          label: "Status ",
          align: "center",
          field: "teamMemberStatus",
        },
      ],
      rows: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%",
        },
      ],
      memberList: [],
      axioscon,
    };
  },
  mounted() {
    this.fetchAllMember();
  },
  methods: {
    fetchAllMember() {
      axioscon
        .get("/getallteammember?businessId=1")
        .then((res) => {
          console.log(res);
          this.memberList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
