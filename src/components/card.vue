<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h4 class="card-title">
          <span class="fw-bold">Organisation : </span>{{ name }}
        </h4>
        <hr />

        <div class="row">
          <h5><span class="fw-bold">Item : </span>{{ item }}</h5>
          <h5>
            <span class="fw-bold"
              >Quantity <small>(no of person)</small> : </span
            >{{ quantity }}
          </h5>
          <h5><span class="fw-bold">Phone No : </span>{{ phn }}</h5>
          <h5><span class="fw-bold">Location : </span>{{ location }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "item", "quantity", "phn", "location"],
  data() {
    return {};
  },
};
</script>