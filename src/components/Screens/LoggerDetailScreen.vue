<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Loggers </a></li>

          <li class="breadcrumb-item active" aria-current="page">Logger Detail</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-12">
              <p class="text-muted">Logger Id : 6476589</p>
            </div>
            <div class="col-auto">
              <p>Name : 6476589</p>
              <p>Contact : 6476589</p>
            </div>
            <div class="col-auto">
              <p>Email : 6476589</p>
              <p>Total Response : 6476589</p>
              <p>Last Response Recorded : 6476589</p>
              <p>Added on : 6476589</p>
            </div>
            <div class="col-md-12">
              <p>
                <strong>Additional Details</strong><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam,
                quam quis distinctio impedit nihil architecto nesciunt facilis, illum
                totam enim nobis. Vero labore tempora a, ullam ratione quaerat voluptate
                nam, cumque voluptatibus fugit saepe reprehenderit. Labore quasi eligendi
                tenetur eos qui voluptates, consectetur numquam eum praesentium temporibus
                voluptatum quia deserunt et doloremque reiciendis accusantium quas sed
                ipsum odit? Error incidunt maiores, praesentium labore minima, commodi
                dolor natus optio officia adipisci aut accusantium officiis? Quam a nulla,
                ex animi accusantium et quas maxime consequatur facilis vel ratione, neque
                esse! Ratione magnam assumenda eum quibusdam reprehenderit voluptatibus
                recusandae deserunt ut. Dolore, delectus rerum quibusdam est repellendus,
                aspernatur reprehenderit, vitae velit exercitationem minus ipsum eligendi.
                Porro, possimus ipsa iusto ab dolorem fuga!
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Logged Feedback</h6>
      <div class="mt-3 d-flex flex-row-reverse">
        <div class="input-group mt-1">
          <input
            class="form-control"
            type="search"
            placeholder="Search Services"
            aria-label="Search"
          />
          <button class="btn btn-success">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </div>
      </div>

      <div class="table-responsive-md mt-2">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feedback</td>
              <td>Impact</td>
              <td>Effort</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Submission Id</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/feedbackdetail/raw/1')"
              >
                vsxvb x v
              </td>
              <td>vs</td>
              <td>vs</td>
              <td>vds</td>
              <td>vds</td>
              <td id="feedbackTitle">vds</td>
              <td>vds</td>
              <td>vds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoggerDetailScreen",
};
</script>

<style lang="scss" scoped></style>
