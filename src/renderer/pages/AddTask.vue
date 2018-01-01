<template lang="html">
  <div class="add-task">
    <div class="content">
      <vue-editor id="editor" v-model="content"></vue-editor>
      <button class="create-task-button" @click="createTask">Create task</button>
    </div>
    <div class="sidebar">
      <event-calendar></event-calendar>
      <div class="spare-time-choose">
        <spare-time v-for="item in tasks" :id="item" :key="item"></spare-time>
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
      tasks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    }
  },
  methods: {
    createTask () {
      const firebaseLoger = firebase.database().ref(`search_ingredients`)
      const loger = firebaseLoger.push()
      loger.set({
        'user_id': `test`,
        'selected_ingredients': 'ingredients'
      })
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
      height 250px
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
