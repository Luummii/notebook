<template lang="html">
  <div class="task-item">
    <p class="task-title">TASK {{ id }}</p>
    <p class="task-description">Description task</p>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    id: Number 
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.task-item
  margin 7px 10px
  border 1px solid #BDBDBD
  padding 5px 10px


  .task-title
    font-size 16px 
    color #494949
  
  .task-description
    font-size 15px 
    color #737373
    line-height 5px
</style>