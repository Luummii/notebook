<template lang="html">
  <div class="spare-time-item">
    <div class="spare-time-content">
      {{ time }}    
    </div>
    <div class="spare-time-options">      
      <input type="checkbox" :id="id" name="cc" />
      <label :for="id"><span></span></label>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpareTime',
  props: {
    id: Number,
    time: String 
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.spare-time-item
  border 1px solid #BDBDBD
  border-radius 10px
  height 30px
  margin-top 10px
  padding 7px 7px 7px 15px

  .spare-time-content
    display inline-block
    float left
    font-size 12px  

  .spare-time-options
    float right
    input[type="checkbox"] 
      display none  
    input[type="checkbox"] + label span         
      display block
      width 19px
      height 19px
      background url(../assets/img/check_radio_sheet.png) left top no-repeat
      cursor pointer 
    input[type="checkbox"]:checked + label span 
      background url(../assets/img/check_radio_sheet.png) -19px top no-repeat  
</style>