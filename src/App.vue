<template>
<div id="app">
  <div class="opening-logo">
    <img id="logo" src="/images/garden.jpeg">
    <router-link style="text-decoration: none; color: inherit;" to="/">
    <h1 id="logo-text">My Favorite Recipes</h1>
    </router-link>
  </div>
  <router-view />
  <div class="footer">
    <a href="https://github.com/katecgammon/recipesWebsite.git">https://github.com/katecgammon/recipesWebsite.git</a>
  </div>
</div>
</template>
<script>
export default {
  name: 'App-View',
  
    data() {
    return {
      
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  font-family: Optima, sans-serif;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.opening-logo {
  position: relative;
  text-align: center;
  color: white;
}

#logo {
  object-fit: cover;
  width: 100%;
  height: 400px;
}

#logo-text {
  position: absolute;
  font-size: 80px;
  width: 100%;
  margin-top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#logo-text:visited { 
 text-decoration: none; 
 color: white; 
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
.footer {
  text-align: center;
  margin: 40px;
  min-height: 100%;
  margin-bottom: 50px;
}
body {
  margin: 0;
}
</style>