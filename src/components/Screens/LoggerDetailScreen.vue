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
        <div class="col-md-12">
          <p class="text-muted">Logger Id : 6476589</p>
          <h5>grgrg</h5>

          <div class="row">
            <div class="col-auto"><p>Email : 6476589</p></div>
            <div class="col-auto"><p>Contact : 6476589</p></div>
            <div class="col-auto"><p>Total Response : 6476589</p></div>
            <div class="col-auto"><p>Last Response Recorded : 6476589</p></div>
            <div class="col-auto">
              <p>Added on : 6476589</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, esse
            recusandae molestias sint aliquam quae repellat perferendis! Sequi,
            repellendus pariatur adipisci debitis maxime laborum consectetur? Nam id porro
            reiciendis at maxime est. Doloremque laudantium atque repudiandae fugiat omnis
            minima id quibusdam nesciunt beatae error eius perferendis ipsum blanditiis
            ipsam repellat iste, nisi, vero fugit! Iste harum, praesentium minus molestias
            velit deleniti et voluptatum maiores quaerat repellat voluptatibus provident
            quibusdam, cumque magnam cupiditate. Cumque dolorum consequatur, veritatis
            quae quasi iusto deleniti corporis eveniet tenetur molestiae nihil
            perspiciatis dicta voluptate vel placeat. Sequi autem incidunt odit ducimus
            eius non accusantium cumque eos labore nesciunt delectus laborum ex, maiores
            quaerat. Reiciendis, veniam dolorum deserunt quod illum dignissimos aperiam
            ratione facilis earum cum minima!
          </p>
        </div>
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
