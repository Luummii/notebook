<template lang="html">
  <div class="notes">
    <div class="content">
      NOTES
    </div>
    <div class="sidebar">
      
    </div>    
  </div>
</template>

<script>

export default {
  name: 'Notes',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.notes
  margin-top 50px
  .content
    float left
    width $width
    margin-top $margin
    margin-left $margin
  .sidebar
    position fixed
    float right
    width 24%
    top 57px
    right 5px
</style>
