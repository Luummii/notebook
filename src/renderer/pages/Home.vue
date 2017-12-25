<template>
  <div class="home">
    <div class="content"></div>
    <div class="sidebar">
      <event-calendar></event-calendar>
    </div>    
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue'
export default {
  name: 'Home',
  components: {
    'event-calendar': Calendar
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
    width 82%
    overflow auto
  
  .sidebar
    float right
    width 18%
    overflow auto
</style>
