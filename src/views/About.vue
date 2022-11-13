<template>
  <div class="about">
    <na />
    <div class="container fst-italic" style="padding-top: 300px">
      <h3 style="color: white">OUR MISSION</h3>
      <h1 style="color: white">
        Working towards an India free of hunger and malnutrition.
      </h1>
      <div class="container px-5 fst-italic" style="padding-top: 100px">
        <div class="row justify-content-start">
          <div class="col-6">
            <h3>Our Vision</h3>
            <h4 style="color: black" class="text-muted">
              Feeding India is a non-profit organization dedicated to eradicate
              hunger and improve malnutrition outcomes in India.
            </h4>

            <h4 style="color: black" class="text-muted">
              Feeding India works with on-ground non profit partners working on
              education and child/maternal malnutrition by providing regular
              meals to dependents.
            </h4>

            <br />
            <h4 style="color: black" class="text-muted">
              All efforts are concerted towards providing better food to more
              people. Through our targeted interventions for child and maternal
              malnutrition, we are working towards bringing large-scale systemic
              transformation in the nutrition landscape of India.
            </h4>
          </div>
          <div class="col-6">
            <img
              src="../assets/1.jpg"
              class="img-fluid"
              alt=""
              style="height: 350px; border-radius: 20px"
            />
          </div>
        </div>
        <div class="team pt-4">
          <h2>Meet The Team</h2>
          <div class="container pt-2 col">
            <div class="row">
              <div class="col-6 col-sm-4">
                <div class="card shadow-lg" style="width: 18rem">
                  <img src="../assets/mithi.jpg" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-text">Head</h5>
                  </div>
                </div>
              </div>
              <div class="col-5 col-sm-4">
                <div class="card shadow-lg" style="width: 18rem">
                  <img src="../assets/mano.jpg" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-text">Tech Team Lead</h5>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4">
                <div class="card shadow-lg" style="width: 18rem">
                  <img src="../assets/nath.jpg" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-text">Team Lead (promotion )</h5>
                  </div>
                </div>
              </div>
              <div class="col-5 col-sm-4">.</div>

              <!-- Force next columns to break to new line -->
              <div class="w-100"></div>

              <div class="col-5 col-sm-4">
                <div class="card shadow-lg" style="width: 18rem">
                  <img src="../assets/priyan.jpg" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-text">lead (marketing)</h5>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4">
                <div class="card shadow-lg" style="width: 18rem">
                  <img src="../assets/keshav.jpg" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-text">Treasure</h5>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4">
                <div class="card shadow-lg" style="width: 18rem">
                  <img src="../assets/1.jpg" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-text">Team lead</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>


<style scopped>
.about {
  background-image: url(../assets/4.jpg);

  background-size: 100% 100%;
  height: 550px;
}
</style>

<script>
import na from "../components/nav.vue";
import foot from "../components/footer.vue";
export default {
  name: "about",
  components: {
    na,
    foot,
  },
};
</script>
