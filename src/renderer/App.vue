<template>
  <div id="app"> 
    <top-menu></top-menu>   
    <router-view  ></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
export default {
  name: 'notebook',
  components: {
    TopMenu
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/lib/normalize'
@import './assets/stylus/lib/vars'
@import url('https://fonts.googleapis.com/css?family=Ubuntu')
* 
  box-sizing border-box
  
body
  font-family Ubuntu
  font-size 30px

  &::-webkit-scrollbar 
    width: 0  
    background: transparent
</style>
