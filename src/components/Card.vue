<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
    quiz: {
        type: Object,
        required: true
    }
})

const navigateToQuiz = () => {
    router.push(`/quiz/${props.quiz.id}`)
}
</script>

<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" :alt="quiz.name">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>


<style scoped>
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