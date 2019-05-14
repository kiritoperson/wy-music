<template>
    <div id="BannerComponent">
        <el-carousel class="container" :interval="5000" arrow="always">
            <el-carousel-item class="slide" :style="{ backgroundColor: activeColor}" v-for="(item,index) in toBanner" :key="index">
            <img :src="item.imageUrl">
            </el-carousel-item>
        </el-carousel>
  </div>
</template>


<script>
import FastAverageColor from 'fast-average-color/dist/index.es6';

    export default {
        name:"BannerComponent",
        props:['toBanner'],
        data() {
            return{
            activeColor: 'red'
            }
        },
        computed:{

        },
        methods: {
            FastAverageColor,
            AverageColor: function() {
                const fac = new FastAverageColor();
                const activeColor = fac.getColor();
                this.$nextTick(function(){
                    console.log(this.$el.activeColor);
                })
                return data.activeColor = color;
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