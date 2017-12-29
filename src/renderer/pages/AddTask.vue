<template lang="html">
  <div class="add-task">
    <div class="content">
      <vue-editor v-model="content"></vue-editor>
    </div>
    <div class="sidebar">
      <event-calendar></event-calendar>
    </div>    
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import EventCalendar from '../components/EventCalendar.vue'

export default {
  name: 'AddTask',
  components: {
    VueEditor, EventCalendar
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.add-task
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