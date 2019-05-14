<template>

<div id="MVComponent">
  <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="30" :clickable="false" :space="140" :width="125" :height="185" :disable3d="true" :border="0">
    <slide v-for="(slide, i) in slides" :index="i">
      <figure >
        <img :src="slide.picUrl | filterImg"/>
          <li>
              <span>{{slide.name}}</span>
              <span>{{slide.copywriter}}</span>
          </li>
      </figure>
    </slide>
  </carousel-3d>
</div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
    export default {
        name:"MVComponent",
        props:['mvData','title'],
        data () {
            return {
                slides: this.mvData
            }
        },
        computed:{
          Carousel3d,
          Slide
        },
        methods: {
            
        }
    }
</script>
<style>
#MVComponent{
  height: 250px;
}
  .carousel-3d-container{
    height: 230px;
    padding: 15px 10px 0px 10px;
  background-color: #F5F5F5;
}

.carousel-3d-container figure {
  background-color: #F5F5F5;
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

    #MVComponent li{
        margin: 5px 2px 0 2px;
        font-size: 13px;
    } 
    .MVComponent li span{
        display: block;
    }

</style>
