<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <HelloWorld/>-->
    <!--    <router-link to="/main">首页</router-link>-->
    <!--    <router-link to="/content">内容页</router-link>-->

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Search
  },
};
</script>

<style>
#app {
  margin: 0px;
}
</style>
