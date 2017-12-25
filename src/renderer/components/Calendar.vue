<template lang="html">
  <div class="calendar">
    <div class="month">      
      <ul>
        <li class="prev">&#10094;</li>
        <li class="next">&#10095;</li>
        <li>
          August<br>
          <span class="year">2017</span>
        </li>
      </ul>
    </div>

    <ul class="weekdays">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li class="weekend">Sa</li>
      <li class="weekend">Su</li>
    </ul>

    <ul class="days">  
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span class="active">10</span></li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/lib/vars'
* 
  box-sizing border-box

ul 
  list-style-type none

.month 
  padding 10px 20px
  height 40px
  width 100%
  background $second-color
  text-align center

  ul
    margin 0
    padding 0

  li
    color white
    font-size 10px    
    text-transform uppercase
    letter-spacing 3px

  .year
    font-size 9px

  .prev 
    float left
    padding-top 7px

  .next 
    float right
    padding-top 7px

.weekdays 
  margin 0
  padding 10px 10px
  background-color #ddd
  font-size 10px

  .weekend
    color #B74E91

  li 
    display inline-block
    width 12.9%
    color $bold-color  
    text-align center  

.days 
  padding 10px
  margin 0

  li
    list-style-type none
    display inline-block
    width 11%
    text-align center
    margin-bottom 5px
    font-size 12px
    color #777

  .active 
    padding 5px
    border-radius 12px
    border 1px solid #00B5AC
    color: #00B5AC !important
</style>