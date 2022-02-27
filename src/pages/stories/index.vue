<template>
  <div>
    <h-music :music="musicList.storiesMusic"></h-music>
  </div>
</template>

<script>
import musicList from '../../datas/music.js'
import HMusic from '../../components/music'
export default {
data() {
  return {
    musicList:musicList
  }
},
  components: {
    HMusic
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
