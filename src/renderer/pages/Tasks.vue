<template lang="html">
  <div class="currently">
    <div class="content">
      <draggable v-model="tasks" :options="{ animation: 200 }" :no-transition-on-drag="true" @start="drag=true" @end="drag=false">
        <transition-group :name="!drag ? 'list-complete' : null" :css="true">
          <task-item-list v-for="item in tasks" :id="item" :key="item"></task-item-list>
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
import TaskItemList from '../components/TaskItemList.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Currently',
  components: {
    EventCalendar, TaskItemList, draggable
  },
  data () {
    return {
      drag: false,
      tasks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.currently
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
