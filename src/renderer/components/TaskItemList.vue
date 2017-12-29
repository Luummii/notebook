<template lang="html">
  <div class="task-item">    
    <div class="task-content">
      <p class="data">23.05.1979</p>
      <p class="task-description" @click="goToPath(id)">Veniam deserunt officia sint fugiat occaecat veniam nulla nulla dolore. 
                                  Adipisicing aliquip id nulla id nisi qui ad adipisicing. Veniam deserunt officia sint fugiat occaecat veniam nulla nulla dolore. 
                                  Adipisicing aliquip id nulla id ... </p>
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
  border 1px solid #BDBDBD
  border-radius 10px
  padding-left 20px
  padding-bottom 5px
  height 80px
  margin-bottom 5px

  .task-content
    float left
    width 97%
    .task-description
      font-size 16px 
      color #494949
      cursor pointer
      transition-duration .3s
      &:hover 
        color $second-color 
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