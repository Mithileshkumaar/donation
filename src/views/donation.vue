<template>
  <div class="donation" style="padding-top: 80px">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h4>DONATION DETAILS</h4>
          <form>
            <div class="mb-3">
              <label for="" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                v-model="name"
                aria-describedby="emailHelp"
                placeholder="Name of the organisation"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id=""
                v-model="item"
                placeholder="Items to Donate"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label"></label>
              <input
                type="number"
                class="form-control"
                id="lastname"
                v-model="quantity"
                placeholder="Quantity(no of people)"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label"></label>
              <input
                type="number"
                class="form-control"
                id="lastname"
                v-model="phn"
                placeholder="Phone number"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                v-model="location"
                placeholder="Location"
              />
            </div>

            <button type="submit" class="btn btn-danger" @click="info">
              Submit
            </button>
            <router-link to="/donee"> </router-link>

            <div v-if="err.length" class="pt-2 fst-italic">
              <div v-for="e in err" v-bind:key="e.phn" style="color: red">
                <h6>{{ e }}</h6>
              </div>

              <!-- <ul>
            
          </ul> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "firebase/firestore";
import router from "../router";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
// import e from "express";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "",
      item: "",
      quantity: "",
      phn: "",
      location: "",
      err: [],
    };
  },
  methods: {
    info(e) {
      this.err = [];
      if (!this.name) {
        this.err.push("Enter Name");
        console.warn("error");

        if (!this.item) {
          this.err.push("Enter Item To Be Donated");
          console.warn("error");
        }
        if (!this.quantity) {
          this.err.push("Enter quantity");
          console.warn("error");
        }
        if (!this.phn) {
          this.err.push("Enter Phone number");
          console.warn("error");
        }
        if (!this.location) {
          this.err.push("Enter location");
          console.warn("error");
        }
      } else {
        // console.log(this.name);
        e.preventDefault();

        addDoc(
          collection(db, "pracs"),
          {
            name: this.name,
            item: this.item,
            quantity: this.quantity,
            phn: this.phn,
            location: this.location,
          }
          //
        );
        router.push("/donee");
      }
    },
  },
};
</script>
<style scoped>
.donation {
  background-image: url(../assets/2.jpg);
  background-size: 100% 100%;
  height: 100rem;
  background-repeat: no-repeat;
}
.card {
  margin: auto;
  max-width: 350px;
  margin-block: 50px;
}
.d {
  /* margin: 500px; */
}
</style>