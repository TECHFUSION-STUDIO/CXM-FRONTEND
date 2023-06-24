<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Boards </a></li>
          <li class="breadcrumb-item active" aria-current="page">Board Name</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Board Id : 6476589</p>
          <h5>grgrg</h5>

          <div class="row">
            <div class="col-auto"><p>Status : Active</p></div>

            <div class="col-auto"><p>Total Feedbacks : 6476589</p></div>
            <div class="col-auto"><p>Last feedback added at : 6476589</p></div>
            <div class="col-auto"><p>Board Created on : 6476589</p></div>
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
      <div class="shadow-sm p-2 bg-light">
        <div class="">
          <div class="input-group">
            <select class="form-select" id="inputGroupSelect01">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" id="inputGroupSelect01">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input class="form-control" type="text" />
            <button class="btn btn-primary">Add Filter</button>
          </div>
          <div class="mt-2">
            <span class="badge rounded-pill text-bg-info m-1"
              >STATUS = OPEN
              <span class="ms-1"><i class="fa-regular fa-circle-xmark"></i></span
            ></span>

            <span class="badge rounded-pill text-bg-info m-1"
              >CREATED TIME &gt; 16/02/2023
              <span class="ms-1"><i class="fa-regular fa-circle-xmark"></i></span
            ></span>
            <span class="badge rounded-pill text-bg-info m-1"
              >CREATED TIME &lt; 16/02/2023
              <span class="ms-1"><i class="fa-regular fa-circle-xmark"></i></span
            ></span>
          </div>
        </div>
        <div class="input-group mt-4">
          <input
            class="form-control"
            type="search"
            placeholder="Search Services"
            aria-label="Search"
          />
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-outline-primary w-25">Search</button>
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
              <td>Created Time</td>
              <td>Last Updated Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/feedbackdetail/1')"
              >
                vsxvb x v
              </td>
              <td>vs</td>
              <td>vs</td>
              <td>vds</td>
              <td>vds</td>
              <td>vds</td>
              <td>vds</td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-danger m-2 w-25">Delete</button>
      <button class="btn btn-primary m-2 w-25" @click="this.$router.push('/editboard')">
        Edit Board
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardDetailScreen",
};
</script>

<style lang="scss" scoped></style>
