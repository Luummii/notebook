<template>
  <div class="home">
    <div class="content">
      <draggable v-model="myArray">
        <transition-group name="list-complete">
          <task-item v-for="item in 30" :id="item" :key="item"></task-item>
        </transition-group>
      </draggable>
    </div>
    <div class="sidebar">
      <event-calendar></event-calendar>
    </div>    
  </div>
</template>

<script>
import EventCalendar from '../components/EventCalendar.vue'
import TaskItem from '../components/TaskItem.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {
    EventCalendar, TaskItem, draggable
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
.home
  margin-top 50px

  .content
    float left
    width 76%
    overflow auto
  
  .sidebar
    float right
    width 24%
    overflow auto
</style>
