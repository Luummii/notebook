<template lang="html">
  <div class="top-menu">
    <nav>
      <ul>
        <li><a href="#intro">Welcome</a></li>
        <li><a href="#one">Who we are</a></li>
        <li><a href="#two">What we do</a></li>
        <li><a href="#three">Get in touch</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {
      item: ['Home','Test']
    }
  }
}
</script>

<style lang="stylus">
.top-menu
  position fixed
  top 0
  left 0
  right 0
  height 52px
  background-color #291E45
  box-shadow: 0 8px 4px -4px rgba(0, 0, 0, .2)

  nav
    text-align left

    ul
      margin 0
      padding 0

      li
        display inline-block
        margin-left 0.75em
        padding 0
        vertical-align middle

        a 
          border 0
          color #4E4369
          display inline-block
          font-size: 0.44em
          font-weight bold
          letter-spacing 0.2em
          text-transform uppercase
          text-decoration none

          &:hover 
            color #897EA4         

          &.active 
            color #ffffff				
</style>