<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body text-center">
            <img :src="product.image" class="img-fluid product-img" />
            <h3 class="mt-4">
              {{
                product.title.length >= 11
                  ? product.title.substring(0, 10) + "..."
                  : product.title
              }}
            </h3>
            <p class="my-4 fs-5 fw-bold text-muted">{{ product.price }}</p>
            <!-- <h4 class="my-4">{{ product.description }}</h4> -->
            <router-link
              :to="`/product/${product.id}`"
              class="btn btn-primary btn-block"
              >More Detail</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductHome",

  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((e) => {
        console.e;
      });
  },
};
</script>

<style>
.product-img {
  height: 150px;
}
</style>
