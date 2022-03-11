<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/globe.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="menu-item">
          <img src="/images/love.png">
          <p>About</p>
        </div>
      </router-link>
    </div>
  </div>
  <RecipeList :recipes="recipes" />
</div>
</template>

<script>
import RecipeList from "../components/RecipeList.vue"
export default {
  name: 'Home-View',
  components: {
    RecipeList
  },
    data() {
    return {
      searchText: '',
    }
  },
  computed: {
    recipes() {
      return this.$root.$data.recipes.filter(recipe => recipe.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30%;
  height: 50%;
  margin-left: 30px;
  margin-top: 20px;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.menu-item {
  margin-right: 20px;
}
</style>
