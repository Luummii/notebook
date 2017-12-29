<template lang="html">
  <div class="top-menu">
    <div class="logo"></div>     
    <nav>
      <ul>        
        <li><router-link tag="a" to="/Currently">Currently</router-link></li>
        <li><router-link tag="a" to="/Notes">Notes</router-link></li>
        <li><router-link tag="a" to="/Options">Options</router-link></li>
        <li><router-link tag="a" to="/AddTask" class="add-task-button">Add Task</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TopMenu',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.top-menu
  position fixed
  top 0
  left 0
  right 0
  height 52px
  background-color $bg
  box-shadow: 0 8px 4px -4px rgba(0, 0, 0, .2)

  .logo
    width 20px
    height 20px
    position relative
    float left
    margin-left 10px
    margin-top 15px
    vertical-align middle
    background no-repeat center center
    background-size cover
    background-image url('../assets/img/logo.png')

  nav
    text-align left
    margin-left 40px
    ul
      margin 0
      padding 0
      li
        display inline-block
        margin-left 0.15em
        padding 0
        vertical-align middle
        a 
          border 0
          color $button-color
          display inline-block
          font-size: 0.44em
          font-weight bold
          text-transform uppercase
          text-decoration none
          transition-duration .3s
          &:hover 
            color $hover-color
          &.router-link-active 
            color $active-color		

        .add-task-button
          border 1px solid $button-color
          padding 3px	
          border-radius 3px

          &.router-link-active 
            border 1px solid $active-color
</style>