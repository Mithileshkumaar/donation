<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand"
        ><router-link to="/" class="nav-link">
          <img src="../assets/logo.jpg" alt="" style="width: 170px" />
          <!-- <h3 style="color: white">WeDonate</h3>` -->
        </router-link></a
      >

      <form class="d-flex">
        <router-link
          to="/about"
          class="nav-link btn-outline-danger"
          style="color: white"
        >
          <h5>About</h5>
        </router-link>
        <router-link
          to="/contact"
          class="nav-link btn-outline-danger"
          style="color: white"
          ><h5>Contact us</h5>
        </router-link>
      </form>
    </div>
  </nav>
</template>