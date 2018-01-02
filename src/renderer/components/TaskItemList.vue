<template lang="html">
  <div class="task-item" :style="{ border: check ? `2px solid #00B5AC` : `1px solid #BDBDBD` }">    
    <div class="task-content">
      <p class="data" :style="{ color: check ? '#989898' : '#494949'}">23.05.1979</p>
      <p class="task-description" 
         @click="goToPath(id)" 
         v-html="task.content"
         :style="{ textDecoration: check ? 'line-through' : 'none', color: check ? '#989898' : '#494949'}">
      </p>
    </div>
    <div class="task-options">      
      <input type="checkbox" :id="id" @click="onCheckedClick()" :checked="check"/>
      <label :for="id"><span></span></label>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    id: String,
    task: Object 
  },
  data () {
    return {
      textDecoration: 'none',
      check: false
    }
  },
  methods: {
    onCheckedClick () {
      this.check = !this.check      
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
      text-decoration none
      transition-duration .5s
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