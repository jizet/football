<template>
  <el-container id="app">
    <el-header>
      <AppHeader/>
    </el-header>
    <el-container>
      <el-aside padding width="200px">
        <SideBar @change-filter="changeFilter"/>
      </el-aside>
      <el-main>
        <HomePage/>
      </el-main>
    </el-container>
  </el-container>
</template>
  
<style src="./assets/main.css"></style>
<script>
import AppHeader from "./components/AppHeader/AppHeader.vue";
import HomePage from "./components/HomePage/HomePage.vue";
import SideBar from "./components/SideBar/SideBar.vue";
// import HomePage from './components/HomePage/HomePage.vue'

export default {
  name: "app",
  components: {
    AppHeader,
    HomePage,
    SideBar
  },
  methods: {
    changeFilter() {
    }
  }
};
</script>


