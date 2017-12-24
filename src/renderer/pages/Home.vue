<template>
  <div id="wrapper">
    TEST TEXT
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>

</style>
