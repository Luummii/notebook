<template lang="html">
  <div class="currently">
    <div class="content">
      <task-item-list v-for="(item, key, index) in tasks" :task="item" :key="index" :id="key"></task-item-list>
    </div>
    <div class="sidebar">
      <event-calendar></event-calendar>
    </div>    
  </div>
</template>

<script>
import EventCalendar from '../components/EventCalendar.vue'
import TaskItemList from '../components/TaskItemList.vue'
import firebase from 'firebase'

export default {
  name: 'Currently',
  components: {
    EventCalendar, TaskItemList
  },
  data () {
    return {
      chooseDate: { day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear() },
      tasks: {}
    }
  },
  created () {
    this.getTasks(this.chooseDate)
    this.$eventStore.$on('getTasks', this.getTasks)
  },
  beforeDestroy () {
    this.$eventStore.$off('getTasks')
  },
  methods: {
    getTasks (dateObj) {      
      this.chooseDate = dateObj
      const { day, month, year } = dateObj
      const date = `${day}${month}${year}`
      const firebaseTask = firebase.database().ref(`tasks/${date}`)
      firebaseTask.orderByKey().on('value', (snapshot) => {
        this.tasks = snapshot.val()
      })
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
