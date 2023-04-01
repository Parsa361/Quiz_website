<script setup>

</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="search...">
    </header>
    <div class="options-container">
      <div class="card">
        <img src="https://picsum.photos/200" alt="">
        <div class="card-text">
          <h2>Math</h2>
          <p>15 questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 4px;
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
  padding: 0 5px;
}
</style>