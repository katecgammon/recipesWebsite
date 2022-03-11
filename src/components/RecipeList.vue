<template>
<div class="recipes-wrapper">
    <div class="price">
        <button class="auto" v-on:click="isHidden = !isHidden">View/Hide All Ingredients</button>
      </div>
  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
      <div class="info">
        <h1>{{recipe.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/recipes/'+recipe.image">
      </div>
      
      <div v-if="!isHidden" class="ingredients">
        <ul>
            <li class="ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.message">{{ingredient.message}}</li>
        </ul>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RecipeList',
  props: {
    recipes: Array
  },
  data() {
      return {
          isHidden: true
      }
  },
  methods: {
    viewIngredients(recipe) {
        console.log(recipe.ingredients);
    }
  },
}


</script>

<style scoped>
.recipes-wrapper {
  
  align-items: center;
  justify-content: center;
}

.recipes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.recipe img {
  height: 350px;
  width: 300px;
  object-fit: cover;
}

.recipe .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  position: relative;
  text-align: center;
  
}

.ingredients {
    height: 350px;
    width: 300px;
    font-size: 10px;
}

.info {
  text-align: center;
  color: #000;
  padding: 10px 30px;
  height: 60px;
}

.info h1 {
  font-size: 16px;
}


.price {
    text-align: center;
  width: 50%;
  margin: auto;
  margin-top: 50px;
}

button {
  height: 50px;
  background-color: white;
  border: 1px solid black !important;
  color: black;
  border: none;
  width: 100%;
}

.auto {
  margin-left: auto;
}
</style>