
<template>
  <div>
    <h2>Menu Makanan</h2>
    <ul>
      <li v-for="item in foods" :key="item.id">{{ item.name }} - Rp{{ item.price }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const foods = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/foods')
  foods.value = await res.json()
})
</script>
