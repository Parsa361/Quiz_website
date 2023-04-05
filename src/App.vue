<script setup>
import q from './data/quizes.json'
import { ref, watch } from 'vue'
import Card from './components/Card.vue';

const quizes = ref(q)
const search = ref('')

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="search...">
    </header>

    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 8px;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 20px 0 30px 0;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(179, 198, 192, 0.6);
  border-radius: 6px;
  padding: 10px 16px;

}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>