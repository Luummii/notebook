<template lang="html">
  <div class="add-task">
    <div class="content">
      <vue-editor v-model="content"></vue-editor>
    </div>
    <div class="sidebar">
      <event-calendar></event-calendar>
      <div class="test">
        <spare-time v-for="item in tasks" :id="item" :key="item"></spare-time>
      </div>
    </div>    
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import EventCalendar from '../components/EventCalendar.vue'
import SpareTime from '../components/SpareTimeItemList.vue'

export default {
  name: 'AddTask',
  components: {
    VueEditor, EventCalendar, SpareTime
  },
  data () {
    return {
      content: '',
      tasks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
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
    bottom 0

    .test
      position absolute
      overflow-y scroll
      bottom 5px
      top 360px
      right 0px
      left 0
      &::-webkit-scrollbar 
        width: 0  
        background: transparent
</style>