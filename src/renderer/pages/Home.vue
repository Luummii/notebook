<template>
  <div class="home">
    <div class="content"></div>
    <div class="sidebar">
      <event-calendar></event-calendar>
    </div>    
  </div>
</template>

<script>
import EventCalendar from '../components/EventCalendar.vue'
export default {
  name: 'Home',
  components: {
    EventCalendar
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
