<script>
import axios from "axios";
import { useRoute } from "vue-router";
import Product from "../components/Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      product: [],
    };
  },
  mounted() {
    const route = useRoute();
    const id = parseInt(route.params.id);

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        this.product = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<template>
  <div class="flex justify-center">
    <Product :product="product" />
  </div>
</template>

<style scoped></style>
