<template>
<div>
    
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item" style="margin-left: 20px;">Sort by: </li>
      <li class="pure-menu-item"><a @click="select('Appetizer')" href="#" class="pure-menu-link">Appetizer</a></li>
      <li class="pure-menu-item"><a @click="select('Main')" href="#" class="pure-menu-link">Main</a></li>
      <li class="pure-menu-item"><a @click="select('Side')" href="#" class="pure-menu-link">Side</a></li>
      <li class="pure-menu-item"><a @click="select('Drink')" href="#" class="pure-menu-link">Drink</a></li>
    </ul>
  </div>
  <h1 id="course" >Filter By Course</h1>
  <RecipeList :recipes="recipes" />
</div>
</template>
<script>
import RecipeList from "../components/RecipeList.vue"
export default {
  name: 'Browse-View',
  components: {
    RecipeList
  },
  data() {
    return {
      course: '',
    }
  },
  computed: {
    recipes() {
      return this.$root.$data.recipes.filter(recipe => recipe.course === this.course);
    }
  },
  methods: {
    select(course) {
      this.course = course;
    }
  }
}
</script>

<style>
    #course {
        text-align: center;
        font-size: 60px;
    }
</style>