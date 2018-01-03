<template lang="html">
  <div class="add-task">
    <div class="content">
      <vue-editor id="editor" v-model="content"></vue-editor>
      <button class="create-task-button" @click="createTask">Create task</button>
    </div>
    <div class="sidebar">
      <event-calendar></event-calendar>
      <div class="spare-time-choose">
        <spare-time v-for="item in tasks" :id="item.id" :key="item.id" :time="item.time"></spare-time>
      </div>
    </div>    
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import EventCalendar from '../components/EventCalendar.vue'
import SpareTime from '../components/SpareTimeItemList.vue'
import firebase from 'firebase'

export default {
  name: 'AddTask',
  components: {
    VueEditor, EventCalendar, SpareTime
  },
  data () {
    return {
      content: '',
      tasks: [],
      chooseDate: { day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear() },
      hoursTask: []
    }
  },
  created () {
    this.getTasks(this.chooseDate)
    this.$eventStore.$on('getTasks', this.getTasks)
    this.$eventStore.$on('sheckedTime', this.sheckedTime)
  },
  beforeDestroy () {
    this.$eventStore.$off('getTasks')
    this.$eventStore.$off('sheckedTime')
  },
  methods: {
    getTasks (dateObj) {      
      this.chooseDate = dateObj
      const { day, month, year } = dateObj
      const date = `${day}${month}${year}`
      const firebaseTask = firebase.database().ref(`tasks/${date}`)
      firebaseTask.orderByKey().on('value', (snapshot) => {
        this.createTimeLine(snapshot.val())        
      })
    },
    createTimeLine (time = {}) {
      this.tasks = []
      for (let i = 0; i < 24; i++) {
        this.tasks.push({ id: i, time: `${i < 10 ? '0' + i : i}-00 ... ${(i + 1) < 10 ? '0' + (i + 1) : (i + 1)}-00`})
      }
      const del = []    
      for (let a in time) {
        del.push(a)
      }
      this._.pullAt(this.tasks, del)
    },
    sheckedTime (id) {      
      if (this.hoursTask.indexOf(id) != -1) {        
        this.hoursTask.splice(id, 1)
      } else {
        this.hoursTask.push(id)
      }      
    },
    createTask () {
      const { day, month, year } = this.chooseDate
      const hour = this.hoursTask
      console.log('day = ', day, 'month = ', month, 'year = ', year, 'hour = ', hour)
      for (let i = 0; i < this.hoursTask.length; i++) {
        const firebaseTask = firebase.database().ref(`tasks/${day}${month}${year}/${this.hoursTask[i]}`)
        firebaseTask.set({
          'content': this.content,
          'close': false,
          'path': `tasks/${day}${month}${year}/${this.hoursTask[i]}`
        })
      }     
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
    #editor
      height 300px
    .create-task-button
      float right
      margin-top 10px
      height 44px
      border 1px solid $succes-color
      border-radius 5px
      font-size 14px
      color $active-color
      background $succes-color
      cursor pointer
      transition-duration .3s
      &:hover 
        background $second-color
        border 1px solid $second-color

  .sidebar
    position fixed
    float right
    width 24%
    top 57px
    right 5px
    bottom 0

    .spare-time-choose
      position absolute
      overflow-y scroll
      bottom 5px
      top 407px
      right 0px
      left 0
      &::-webkit-scrollbar 
        width: 0  
        background: transparent
</style>
