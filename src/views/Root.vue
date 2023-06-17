<script>
export default {};
</script>

<template>
  <nav class="min-w-fullbg-white shadow">
    <div
      class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize"
    >
      <router-link
        :to="'/'"
        class="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >Home
      </router-link>
      <router-link
        :to="'/products'"
        class="text-gray-800 transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >Products
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<style scoped></style>
