<template>
    <div class="list">
        <div class="regItem" v-for="(item,index) in listData" :key="index">
            <p>{{ item.name }}</p>
            <p>{{ item.tel }}</p>
            <p>{{ item.number }}</p>
        </div>
    </div>
</template>

<script>
import datas from '../../datas/data'
export default {
data(){
      return {
        listData: datas
      }
    },
    
    
    mounted() {
    console.log(datas);
    console.log(this.listData);
},


}

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
