<template>
  <div id="home">
    <div class="hpage">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <ul class="nav justify-content-end container">
            <li class="nav-item">
              <router-link to="/about"
                ><a class="nav-link" href="#">About us</a></router-link
              >
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-md-6"></div>

          <div
            class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"
            style="padding-top: 250px"
          >
            <h1>FEED THE ORPHANS</h1>
            <h4>We serve daily meals to people in need across India</h4>
            <div
              class="d-flex flex-row bd-highlight mb-3 pt-4"
              style="padding-left: 160px"
            >
              <div class="p-2 bd-highlight">
                <router-link to="/donation"
                  ><button type="button" class="btn btn-danger btn-lg">
                    FOOD TO DONATE
                  </button></router-link
                >
              </div>
              <div class="p-2 bd-highlight">
                <router-link to="/donee"
                  ><button
                    type="button"
                    class="btn btn-danger btn-lg"
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
    <!-- </body> -->
    <div class="container-sm">
      <!-- <h4 style="color: black">
        Feeding India by Zomato is a not for profit organization, designing
        interventions to reduce hunger among underserved communities in India.
      </h4> -->
      <div
        class="d-flex flex-row bd-highlight mb-3 justify-content-center pt-5"
      >
        <div class="p-2 bd-highlight" style="font-size: 25px">
          <h2>OUR VISION</h2>

          <h4 style="color: black" class="text-muted">
            Feeding India is a non-profit organization dedicated to eradicate
            hunger and improve malnutrition outcomes in India.
          </h4>

          <h4 style="color: black" class="text-muted">
            We work toward this mission by supporting large-scale systemic
            interventions as well as providing essential food support to
            underserved communities in the form of raw grains and freshly cooked
            food.
          </h4>
          <h4 style="color: black" class="text-muted">
            Feeding India works with on-ground non profit partners working on
            education and child/maternal malnutrition by providing regular meals
            to dependents.
          </h4>
        </div>
        <div class="p-2 bd-highlight">
          <img
            src="../assets/2.jpg"
            alt=""
            style="height: 300px; border-radius: 10px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
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
.hpage {
  background-image: url(../assets/2.jpg);
  background-size: 100% 100%;
  height: 650px;
  background-repeat: no-repeat;
}
.nav-link {
  color: white;
}
.nav-item {
  font-size: 20px;
}
.container-sm {
  font-style: italic;
  letter-spacing: 2px;
  padding: 100px;
  padding-top: 20px;
}
</style>