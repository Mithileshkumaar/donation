<template>
  <div id="home">
    <div class="container">
      <!-- <nav class="navbar navbar-light">

        <div class="container-fluid">
          <ul class="nav justify-content-end container">
            <li class="nav-item">
              <router-link to="/about"
                ><a class="nav-link" href="#" style="color: white"
                  >About us</a
                ></router-link
              >
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#" style="color: white">Contact us</a>
            </li>
          </ul>
        </div>
      </nav> -->
      <na />
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-md-6"></div>

          <div
            class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"
            style="padding-top: 250px"
          >
            <h1>FEED THE ORPHANS</h1>
            <h4>We serve daily meals to people in need across India</h4>
            <br />
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-4 mx-4">
                  <router-link to="/donation"
                    ><button type="button" class="btn btn-danger btn">
                      DONATE FOOD
                    </button></router-link
                  >
                </div>
                <div class="col-4">
                  <router-link to="/donee"
                    ><button
                      type="button"
                      class="btn btn-danger"
                      v-bind="disable"
                    >
                      DONATED FOOD
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4 style="color: black" class="fst-italic container">
    WeDonate is a not for profit organization, designing interventions to reduce
    hunger among underserved communities in India.
  </h4>

  <div class="container px-5 pt-5 fst-italic">
    <div class="row justify-content-start">
      <div class="col-6">
        <h3>OUR MOTO</h3>
        <h4 style="color: black" class="text-muted">
          WeDonate is a non-profit organization dedicated to eradicate hunger
          and improve malnutrition outcomes in India.
        </h4>
        <br />
        <h4 style="color: black" class="text-muted">
          All efforts are concerted towards providing better food to more
          people. Through our targeted interventions for child and maternal
          malnutrition, we are working towards bringing large-scale systemic
          transformation in the nutrition landscape of India.
        </h4>

        <router-link to="/about"
          ><a class="nav-link" style="color: red" href="#">
            Know More..</a
          ></router-link
        >
      </div>
      <div class="col-6">
        <img
          src="../assets/3.jpg"
          class="img-fluid"
          alt=""
          style="height: 350px; border-radius: 20px"
        />
      </div>
    </div>
  </div>
  <foot />
</template>

<script>
import foot from "../components/footer.vue";
import na from "../components/nav.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    foot,
    na,
  },
  method: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
/* body {
  background-image: url(../assets/2.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 750px;
} */
h1 {
  color: white;
  letter-spacing: 10px;
}
h4 {
  padding-top: 10px;
  color: white;
}
#home {
  background-image: url(../assets/2.jpg);
  background-size: 100% 100%;
  height: 650px;
  background-repeat: no-repeat;
}
.nav-link {
}
.nav-item {
  font-size: 20px;
}
</style>

