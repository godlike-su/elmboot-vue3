<template>
  <div>
    <router-view/>
    <Tabbar style=" margin-top: 80px;"  v-if="this.$store.state.isTabbar"></Tabbar>
  </div>
 
  
 
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
export default {
  data() {
      return {
        isTabbar: true
      }
    },
  components: {
    Tabbar
  },
  watch() {
  
      // this.isTabbar = this.$store.state.isTabbar
    },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
