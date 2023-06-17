<script setup>
defineProps({
  product: {
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    Category: String,
    thumbnail: String,
    images: Array,
  },
});
</script>

<template>
  <router-link :to="'/products/' + this.product.id">
    <div
      class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-2"
    >
      <div class="px-4 py-2">
        <h1
          class="text-xl font-bold text-gray-800 uppercase dark:text-white truncate"
        >
          {{ product.title }}
        </h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 truncate">
          {{ product.description }}
        </p>
      </div>

      <img
        class="object-cover w-full h-48 mt-2"
        :src="product.thumbnail"
        :alt="product.title"
      />

      <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-white">{{ product.price }}</h1>
        <h1 class="text-lg font-bold text-white">${{ product.stock }}</h1>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
