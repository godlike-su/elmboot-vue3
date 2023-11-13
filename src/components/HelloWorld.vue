<template>
  <div class="e">
    <router-view/>
    

 
    <!-- <Tabbar /> -->
  </div>
</template>

<script>
import Tabbar from '@/views/Tabbar.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    navigateTo(route) {
      // 在这里处理点击菜单项后的导航逻辑
      console.log(`Navigating to ${route}`);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bottom-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
}
</style>
