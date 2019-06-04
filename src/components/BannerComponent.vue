<template>
    <div id="BannerComponent">
        <el-carousel class="container" :interval="5000" arrow="always">
            <el-carousel-item class="slide" ref="elMain" v-bind:style="elMain" v-for="(item,index) in toBanner" :key="index">
            <img :src="item.imageUrl">
            </el-carousel-item>
        </el-carousel>
  </div>
</template>


<script>
import FastAverageColor from 'fast-average-color';

    export default {
        name:"BannerComponent",
        props:['toBanner'],
        data() {
            return{
                 elMain: {
            background: "#FF0000"
                        },
            }
        },
        computed:{

        },
        
      methods: {
//动态改变el-main的背景颜色
changedBgColor(index) {

if (index != 0) {

this.elMain.background = "#FF0000";

} else {

this.elMain.background = "rgb(255,255,255,0)";

}
},

    }
        }
    
 

</script>

<style lang="scss">
$banner_height: 336px;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
#BannerComponent{
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    .container{
        width: 100%;
        height: 100%;
        .slide{
            text-align:center;
        img{
                width: auto;
                height: 100%;
            }
        }
    }
    }
</style>