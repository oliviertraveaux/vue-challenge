<script>
import axios from "axios";
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      filteredProducts: [],
      categoriesList: [],
      selectedCategory: "",
    };
  },
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        this.products = response.data.products;
        this.filteredProducts = response.data.products;
        console.log(response.data.products);
        this.filterCategories();
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(this.categoriesList);
  },

  methods: {
    setSelectedCategory(category) {
      console.log(category);
      this.selectedCategory = category;
    },

    filterCategories() {
      this.products.forEach((product) => {
        if (
          product.category !== null &&
          product.category !== undefined &&
          !this.categoriesList.some((item) => item === product.category)
        ) {
          this.categoriesList.push(product.category);
          this.categoriesList.sort((a, b) => a.localeCompare(b));
        }
      });
    },
    reset() {
      this.filteredProducts = this.products;
    },
  },

  watch: {
    selectedCategory(newCat) {
      this.filteredProducts = this.products.filter((product) => {
        return newCat !== null ? product.category === newCat : product;
      });
    },
    immediate: true,
  },
};
</script>

<template>
  <div class="flex justify-center flex-wrap w-full gap-4 my-4">
    <button
      @click="setSelectedCategory(category)"
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      v-for="category in categoriesList"
      :key="category"
    >
      {{ category }}
    </button>
    <button @click="reset()">Reset</button>
  </div>

  <div class="flex flex-wrap justify-center m-4 mt-12">
    <Product
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped></style>
