<template lang="html">
  <div class="task">
    <div class="content">
      {{ id }}
      <!-- <div v-html="getQuestion.content_question"></div> Может понадобится для вывода записей из реактора-->
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
@import '../assets/stylus/lib/vars'
.task
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
