<script setup>
import q from './data/quizes.json'
import { ref, watch } from 'vue'

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
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" :alt="quiz.name">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
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

.card {
  width: 250px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2%;
  margin-right: 20px;
  margin-bottom: 25px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
}

.card .card-text {
  padding: 5px;
}
</style>