<template lang="html">
  <div class="task">
    <div class="content" v-html="content"></div>
    <div class="sidebar">
      
    </div>    
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Task',
  data () {
    return {
      path: this.$route.query.path,
      content: ''
    }
  },
  created () {
    const firebaseTask = firebase.database().ref(`${this.path}`)
    firebaseTask.orderByKey().on('value', (snapshot) => {
      this.content = snapshot.val().content
    })
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/lib/vars'
.task
  margin-top 50px
  .content
    float left
    width $width
    margin-top $margin
    margin-left $margin

  .sidebar
    position fixed
    float right
    width 24%
    top 57px
    right 5px
</style>
