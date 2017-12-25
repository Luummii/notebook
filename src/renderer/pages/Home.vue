<template>
  <div class="home">
    <div class="content"></div>
    <div class="sidebar">
      <vue-event-calendar :events="dateEvents"></vue-event-calendar>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dateEvents: [{
        date: '2017/11/12'
      }, {
        date: '2017/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
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
