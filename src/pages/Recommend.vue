<template>
    <div id="Recommend">
        <BannerComponent :toBanner="bannerJson.banners"></BannerComponent>
        <!-- 推荐 -->
        <div id="discover-module" class="area">
            <div class="containerRight">
                <div class="wrap">
                    <div class="v-hd2">
                        <h2>{{recommendSongTitle}}</h2>
                        <div class="tab"  v-for="(value, name) in tab" >
                                <a :href="''">{{ name }}</a>
                                <span class="line">|</span>
                        </div>
                         <span class="more">
                            <router-link to="/newAlbum">更多 <i class="el-icon-d-arrow-right"></i></router-link>
                        </span>
                    </div>
                    <!-- song列表 -->
                         <div class="wrapcontent songlistcomponent" >
                        <ul class="songsList" v-if="recommendSongJson">
                            <li v-for="(itemx,idx) in recommendSongJson.result" :key="idx">
                                <router-link :to="`/songDetail?id=${itemx.id}`">
                                    <img :src="itemx.picUrl" class="pic">
                                    <span>{{itemx.copywriter}}</span>
                                    <span class="name">{{itemx.name}}</span>                            
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- song结束 -->
                       <!-- 新碟上架 -->
                      <div class="v-hd2 v-hd3">
                        <h2>{{topAlbumTitle}}</h2>
                         <span class="more">
                            <router-link to="/newAlbum">更多 <i class="el-icon-d-arrow-right"></i></router-link>
                        </span>
                    <div class="wrapcontent a" >
                        <MVComponent :mvData="personalizedmvJson.result" title="personalized"></MVComponent>
                    </div>
                     <!-- 榜单 -->
                        <div class="v-hd2 v-hd4">
                        <h2>{{topmvTitle}}</h2>
                         <span class="more">
                            <router-link to="/newAlbum">更多 <i class="el-icon-d-arrow-right"></i></router-link>
                        </span>
                    <div class="wrapcontent" >
                        <ToplistComponent></ToplistComponent>
                    </div>
                    </div><!-- 榜单结束 -->

                    </div>
                    <!--  新碟上架结束-->
                </div>
            </div>
              <!--右边  -->
            <div class="containerLeft">
                <div class="smallTitle">{{hotSingersTitle}}</div>
                <SingersComponent :singersData="hotSingersJson.artists"></SingersComponent>
            </div>
           <!-- 右边结束 -->
        </div>

    </div>
</template>

<script>
 import { mapState, mapMutations, mapActions } from 'vuex'
import BannerComponent from '@/components/BannerComponent'
import MVComponent from '@/components/MVComponent'
import ToplistComponent from '@/components/ToplistComponent'
import SingersComponent from '@/components/SingersComponent'
export default {
    name:"Recommend",
     components:{
            BannerComponent,
            SingersComponent,
            ToplistComponent,
            MVComponent
        },
        data () {
            return {
                tab: {
      华语: 'https://music.163.com/#/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD',
      流行: '',
      摇滚: '',
      民谣: '',
      电子: ''
    },
                title: '推荐歌单',
                recommendSongTitle: '热门推荐',
                topAlbumTitle: '新碟上架',
                hotSingersTitle: '热门歌手',
                topmvTitle:'榜单'
            }
        },
    methods: {
            ...mapActions([
                'getBannerData',
                'getRecommendSongsData',
                'getHotSingersData',
                'getpersonlizedMvData'
            ])
        },
    computed: {
            ...mapState({
                'bannerJson': state => state.banner.banner,
                'recommendSongJson': state => state.songlist.recommendsong,
                'hotSingersJson': state => state.singer.hotsingers,
                'personalizedmvJson': state => state.mv.personalizedmv
            }),
        },
    mounted() {            
            this.getBannerData();//bannner
            this.getRecommendSongsData({'limit':8});//推荐歌曲  
            this.getHotSingersData({'offset':0, 'limit':8});//热门歌手
             this.getpersonlizedMvData(); //推荐mv        
        },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

.containerRight{
  
.wrap{
    height: 1425px;
    .v-hd3{
        margin-top: 15px;
    }  
    .v-hd2{
    height: 33px;
    padding: 0 10px 0 0px;
    border-bottom: 2px solid #C10D0C;
        h2{
            padding-left: 20px;
            float: left;
            background: url('~@/assets/images/index.png?2a606ac067114a5d7dff0952474d54f3') no-repeat -232px -155px;
            }
        .tab{
            float: left;
            margin: 7px 0 0 20px;
            .line{
                margin: 0 10px;
                color: #ccc;
            }
        }
        .more{
            line-height: 33px;
            display: flex;
            justify-content: flex-end;
        }
        }
       
    }}
     .containerLeft {
        width: 228px;
        background-color: $white;
        padding: 14px;
        .containerTitle {
            font-size:$font-size;
            border-width:1px;
            border-color:darken($grey,10%);
        }
}
    .songlistcomponent li{
        margin-right: 50px;
    }
    .songsList li {
        span {
            display: block;
        }
    }

</style>