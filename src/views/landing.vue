<template>
  <div class="row align-items-start">
    <div class="col" style="padding-top: 200px">
      <div class="card shadow p-3 mb-5 bg-white">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <h1>welcome</h1>
              <p>To the place where you can feed the poor</p>
              <label for="exampleInputEmail1" class="form-label"></label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter phone number"
              />
            </div>
            <button type="submit" class="btn btn-outline-danger">
              generate otp
            </button>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"></label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter OTP"
              />
            </div>

            <router-link to="/">
              <button type="submit" class="btn btn-outline-danger">
                Submit
              </button></router-link
            >
          </form>
        </div>
      </div>
    </div>
    <div class="col img" style="padding-top: 20px">
      <!-- <h1 style="color: white">FEED THE POOR</h1>
      <h4 style="padding-top: 400px; color: white">
        Food for the Poor responded that it upholds the highest standards of
        integrity and honesty and that it is confident that it will demonstrate
        that its accounting and valuation practices and solicitations meet and
        often exceed legal requirements, as well as industry best practices.
      </h4> -->
    </div>
  </div>
</template>

<style>
.img {
  background-image: url(../assets/3.jpg);
  background-size: 100% 100%;
  height: 730px;
}

.card {
  margin: auto;
  width: 500px;
}
</style>

<script>
</script>