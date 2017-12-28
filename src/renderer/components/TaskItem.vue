<template lang="html">
  <div class="task-item">    
    <div class="task-content">
      <p class="data">23.05.1979</p>
      <p class="task-title">TASK {{ id }}</p>
      <p class="task-description">Veniam deserunt officia sint fugiat occaecat veniam nulla nulla dolore. 
                                  Adipisicing aliquip id nulla id nisi qui ad adipisicing...</p>
    </div>
    <div class="task-options">      
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
  margin 7px
  border 1px solid #BDBDBD
  border-radius 10px
  padding-left 20px
  padding-bottom 5px
  height 80px

  .task-content
    float left
    .task-title
      font-size 16px 
      color #494949
      cursor pointer 
      transition-duration .5s
      &:hover 
        letter-spacing 1px
    .task-description
      font-size 13px 
      color #737373
      line-height 1px  
    .data
      font-size 9px  
      line-height 1px     

  .task-options
    float right
    input[type="checkbox"] 
      display none  
    input[type="checkbox"] + label span   
      display block
      width 19px
      height 19px
      background url(../assets/img/check_radio_sheet.png) left top no-repeat
      cursor pointer 
      margin 24px 5px 0 0  
    input[type="checkbox"]:checked + label span 
      background url(../assets/img/check_radio_sheet.png) -19px top no-repeat   
</style>