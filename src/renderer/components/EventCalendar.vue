<template lang="html">
  <div class="calendar">
    <div class="month"> 
      <div class="left"><div class="arrow-left icon"></div></div>
      <div class="title">
        August
        <div class="year">2017</div>
      </div>
      <div class="right"><div class="arrow-right icon"></div></div>
    </div>

    <div class="weekdays">
      <span v-for="(day, index) in days" :class="weekClass(day)" :key="index">
        {{ day }}
      </span>
    </div>

    <div class="days">  
      <div v-for="day in 31" class="item">
        <p class="date-num">{{ day }}</p>
        <span v-if="day === 3" class="is-busy" :style="{ backgroundColor: '#FF0000' }" ></span>
        <span v-if="day === 28" class="is-today" :style="{ borderColor: '#00B5AC', backgroundColor: 'inherit' }"></span>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../lib/i18n'

export default {
  name: 'Calendar',
  data () {
    return {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  },
  methods: {
    weekClass (day) {
      return (day === 'Sat' || day === 'Sun') ? 'weekend' : 'item'
    },
    dayClass (day) {
      return day === 23 ? 'active' : 'date-num'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/lib/vars'
* 
  box-sizing border-box
.calendar
  position fixed
  margin-top 7px
  margin-right 5px
  .month 
    position relative
    width 100%
    background-color $second-color
    overflow hidden
    color white
    border-radius 10px 10px 0 0
    &>div
      float left
      line-height 10px
      padding 15px
    .title
      width 60%
      text-align center  
      font-size 15px
    .left
      text-align left
      width 20%
      cursor pointer  
    .right
      text-align right
      width 20%
      cursor pointer
    .arrow-left.icon 
      color #000
      position absolute
      left 6%
      margin-top 10px  
    .arrow-left.icon:before 
      content ''
      position absolute
      left 1px
      top -5px
      width 10px
      height 10px
      border-top solid 1px white
      border-right solid 1px white
      transform rotate(-135deg)
    .arrow-right.icon 
      color #000
      position absolute
      right 6%
      margin-top 10px  
    .arrow-right.icon:before 
      content ''
      position absolute
      right 1px
      top -5px
      width 10px
      height 10px
      border-top solid 1px white
      border-right solid 1px white
      transform rotate(45deg)
    .year    
      font-size 9px
      margin-top 7px

  .weekdays
    padding 0 10px
    background $second-color
    font-size 10px
    width 100%
    overflow hidden
    text-align center
    color white
    .item, .weekend
      line-height 30px
      float left
      width 14.285%
    .weekend
      color #B74E91 

  .days
    padding 10px
    width 100%
    overflow hidden
    text-align center
    background $second-color
    color white
    border-radius 0 0 10px 10px
    .item
      position relative
      float left
      display block
      width 14.285%      
      .date-num, .active
        cursor pointer
        font-size 16px
        position relative

      .is-busy
        content ''
        width 14px
        height 3px
        position absolute
        left 50%
        top 50%
        z-index 2
        margin-left -7px
        margin-top 10px
        cursor pointer

      .is-today
        content ''
        border 1px solid #00B5AC
        background-color #fff
        border-radius 50%
        width 36px
        height 36px
        position absolute
        left 50%
        top 50%
        z-index 1
        margin-left -18px
        margin-top -19px
        cursor pointer
</style>