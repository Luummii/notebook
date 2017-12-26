<template lang="html">
  <div class="task-item">    
    <div class="task-content">
      <p class="task-title">TASK {{ id }}</p>
      <p class="task-description">Description task</p>
    </div>
    <div class="task-options">
      <p class="task-data">27.12.17</p>
      <input type="checkbox" :id="id" name="cc" />
      <label :for="id"><span></span></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    id: Number 
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.task-item
  margin 7px 10px
  width 98.5%
  padding 5px 0 5px 20px
  border 1px solid #BDBDBD
  border-radius 10px
  height 70px

  .task-content
    float left
    width 94%
    margin-top -5px
    .task-title
      font-size 16px 
      color #494949    
    .task-description
      font-size 15px 
      color #737373
      line-height 5px
  
  .task-options
    float right
    width 5%
    .task-data
      font-size 12px 
      color #737373
      line-height 3px

  input[type="checkbox"] 
    display: none
  
  input[type="checkbox"] + label span 
    display inline-block
    width 19px
    height 19px
    margin -1px 4px 0 0
    vertical-align middle
    background url(../assets/img/check_radio_sheet.png) left top no-repeat;
    cursor pointer

  input[type="checkbox"] 
    display none
  
  input[type="checkbox"] + label span 
    display inline-block
    width 19px
    height 19px
    margin -1px 4px 0 0
    vertical-align middle
    background url(../assets/img/check_radio_sheet.png) left top no-repeat
    cursor pointer
  
  input[type="checkbox"]:checked + label span 
    background url(../assets/img/check_radio_sheet.png) -19px top no-repeat
  
  
  
      
      
  
</style>