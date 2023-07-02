<template>
    <div>
      <h2>Country Details</h2>
      <div v-if="country">
        <h3>{{ country.name }}</h3>
        <img :src="country.image" :alt="country.name">
        <p>Rank: {{ country.rank }}</p>
      </div>
      <div v-else>
        No country selected.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      country: Object
    }
  };
  </script>
  