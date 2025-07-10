
<template>
  <div>
    <h2>Form Pemesanan</h2>
    <input v-model="name" placeholder="Nama Pemesan" />
    <button @click="submitOrder">Pesan</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')

function submitOrder() {
  alert('Pesanan atas nama ' + name.value + ' berhasil!')
}
</script>
