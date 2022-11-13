<template>
  <div class="contact">
    <na />

    <div class="container-xxl" style="padding-top: 200px">
      <div class="container">
        <div class="col-6">
          <h2 style="color: white" class="fst-bold fs-3 fw-bold">
            Any questions?
          </h2>
          <h1 style="color: white" class="mx-4 fs-1">
            We are happy to help...
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="col-6 mx-5" style="padding-top: 70px; margin-top: 20px">
    <h3 class="text" style="color: black">
      We'd like to <span class="fw-bold text">hear from you</span>
    </h3>
  </div>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <div class="row justify-content-center" style="padding-top: 50px">
          <div class="col-4">
            <h5>Contact</h5>

            <div class="d-flex flex-column justify-content-center">
              <div class="p-2 bd-highlight">
                <i class="fa-solid fa-phone pt-1"><span> 9003107456</span> </i>
              </div>

              <div class="p-2 bd-highlight">
                <i class="fa-sharp fa-solid fa-envelope"
                  ><span> wedonate@gmail.com</span>
                </i>
              </div>
            </div>
          </div>
          <div class="col-4">
            <h5>Social</h5>
            <div class="d-flex justify-content-center">
              <div class="p-2 bd-highlight">
                <i class="fa-brands fa-facebook fa-xl" style="color: blue"></i>
              </div>
              <div class="p-2 bd-highlight">
                <i class="fa-brands fa-whatsapp fa-xl" style="color: green"></i>
              </div>
              <div class="p-2 bd-highlight">
                <i class="fa-brands fa-twitter fa-xl" style="color: cyan"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <foot />
</template>

<style  scoped>
.contact {
  background-image: url(../assets/5.jpg);
  background-size: 100% 100%;
  height: 30rem;
  background-repeat: no-repeat;
  color: rgb(204, 202, 202);
}
.card {
  width: auto;
}
</style>

<script>
import foot from "../components/footer.vue";
import na from "../components/nav.vue";
export default {
  name: "",
  components: {
    foot,
    na,
  },
};
</script>