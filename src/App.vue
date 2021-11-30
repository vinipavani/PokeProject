<template>
  <div id="app">
    <div id="nav">

      <h1 > Pokedex </h1>
    </div>
    <div class="space"></div>
    <router-view />
      
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.space{
  height: 10px;
  margin-bottom: 90px;
}

#nav {
  background-color: #A60B0B;
  width: 100vw;
  margin-top: 0;
  color: #f5e44a;

  position: fixed;
  top:0;
  right: 0;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
