<script setup>
import Card from '@/components/Card.vue';
import q from '@/data/quizes.json'
import { ref, watch } from 'vue'

const quizes = ref(q)
const search = ref('')


watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>


<template>
    <header>
        <h1>Quizes</h1>
        <input v-model.trim="search" type="text" placeholder="search...">
    </header>
    <div class="options-container">
        <TransitionGroup name="cards" appear>
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
        </TransitionGroup>
    </div>
</template>

<style scoped>
header {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 20px 0;
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

.cards-enter-from {
    transform: translateY(-50px);
    opacity: 0;
}
.cards-enter-to {
    transform: translateY(0);
    opacity: 1;
}
.cards-enter-active {
    transition: all 0.6s ease;
}
</style>