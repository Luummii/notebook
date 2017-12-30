<template lang="html">
  <div class="calendar">
    <div class="month"> 
      <div class="left"><div class="arrow-left icon"></div></div>
      <div class="title">
        {{ toDay().month }}
        <div class="year">{{ toDay().year }}</div>
      </div>
      <div class="right"><div class="arrow-right icon"></div></div>
    </div>
    <div class="weekdays">
      <span v-for="(weekDay, index) in i18n[locale].dayNames" :class="weekClass(weekDay)" :key="index">
        {{ weekDay }}
      </span>
    </div>
    <div class="days">  
      <div v-for="item in dayList()" class="item">
        <p class="date-num" :style="{ cursor: item.status ? 'pointer' : 'default', color: item.status ? '#897EA4' : '#7154C2' }">{{ item.day }}</p>
        <span v-if="item.day == 3" class="is-busy" :style="{ backgroundColor: '#B74E91', cursor: item.status ? 'pointer' : 'default' }"></span>
        <span v-if="item.day == 18" class="is-busy" :style="{ backgroundColor: '#C7CB00', cursor: item.status ? 'pointer' : 'default' }"></span>
        <span v-if="item.day == 23" class="is-busy" :style="{ backgroundColor: '#FFFFFF', cursor: item.status ? 'pointer' : 'default' }"></span>
        <span v-if="item.day == 28" class="is-today" :style="{ borderColor: '#00B5AC', backgroundColor: 'inherit', cursor: item.status ? 'pointer' : 'default' }"></span>
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
      i18n,
      locale: 'en',
      days: Number,
      dateObj: new Date()
    }
  },
  created () {
    this.days = this.dateObj.getDate()
  },
  methods: {
    weekClass (day) {
      return (day === 'Sat' || day === 'Sun') ? 'weekend' : 'item'
    },
    toDay () {
      let month = this.i18n[this.locale].monthNames[this.dateObj.getMonth()]      
      return { month: month, year: this.dateObj.getFullYear() }
    },
    dayList () {
      let firstDayInCurentMonth = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), 1)      
      let dayOfWeek = firstDayInCurentMonth.getDay()
      let startDate = new Date(firstDayInCurentMonth)
      startDate.setDate(firstDayInCurentMonth.getDate() - dayOfWeek + 1)

      let item, status, tempArr = [], tempItem
      for (let i = 0 ; i < 42 ; i++) {
        item = new Date(startDate)
        item.setDate(startDate.getDate() + i) // +i т.к. неделя начинается с понедельника

        if (this.dateObj.getMonth() === item.getMonth()) {
          status = 1
        } else {
          status = 0
        }
        tempItem = {
          day: `${item.getDate()}`,
          status: status
        }
        tempArr.push(tempItem)
      }
      return tempArr
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.calendar
  .month 
    position relative
    width 100%
    background-color $second-color
    overflow hidden
    color $active-color
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
    .year    
      font-size 9px
      margin-top 7px

    .arrow-left.icon 
      position absolute
      left 6%
      margin-top 10px
      transition-duration .3s  
      &:before 
        content ''
        position absolute
        left 1px
        top -5px
        width 10px
        height 10px
        border-top solid 1px $active-color
        border-right solid 1px $active-color
        transform rotate(-135deg)

    .arrow-right.icon       
      position absolute
      right 6%
      margin-top 10px  
      &:before 
        content ''
        position absolute
        right 1px
        top -5px
        width 10px
        height 10px
        border-top solid 1px $active-color
        border-right solid 1px $active-color
        transform rotate(45deg)

  .weekdays
    padding 0 10px
    background $second-color
    font-size 10px
    width 100%
    overflow hidden
    text-align center
    color $active-color
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
    color $button-color
    border-radius 0 0 10px 10px
    .item
      position relative
      float left
      display block
      width 14.285%      
      .date-num
        cursor pointer
        font-size 16px
        position relative
      .is-busy
        content ''
        width 15px
        height 3px
        position absolute
        left 49%
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
        z-index 2
        margin-left -18px
        margin-top -19px
        cursor pointer
</style>