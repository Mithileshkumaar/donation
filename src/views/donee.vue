<template>
  <div class="donee" style="padding-top: 100px">
    <h1>Donation Information</h1>
    <div class="row">
      <card
        class="mt-3 col"
        v-for="card in items"
        :key="card.name"
        :name="card.name"
        :item="card.item"
        :quantity="card.quantity"
        :phn="card.phn"
        :location="card.location"
      />
      <!-- <card></card> -->
      <!-- <div v-for="card in cards" :key="card.name">
        <p>{{ card.name }}</p>
        <p>{{ card.item }}</p>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.donee {
  background-image: url(../assets/2.jpg);
  background-size: 100% 100%;
  height: 750px;
}
h1 {
  color: white;
}
</style>

<script>
// @ is an alias to /src
import "firebase/firestore";
// const db = firebase.firestore();
// import firebase from "firebase";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
// const db = getFirestore();
// import { getFirestore } from "firebase/firestore";
import card from "../components/card.vue";
export default {
  name: "Home",
  components: {
    card: card,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getDocument() {
      getDocs(collection(db, "pracs")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.items.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
      });
      console.log(this.items);
    },
  },

  created() {
    this.getDocument();
  },
};
</script>

