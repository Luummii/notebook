<template>
  <div class="task">
    <div class="content">
      {{ id }}
    </div>
    <div class="sidebar">
      
    </div>    
  </div>
</template>

<script>

export default {
  name: 'Task',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style lang="stylus">
.task
  margin-top 50px
  .content
    float left
    width 75%
  
  .sidebar
    float right
    width 24%
</style>
