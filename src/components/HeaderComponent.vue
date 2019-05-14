<template>
    <div id="HeaderComponent" class="m-subnav">
        <div class="mTop">
            <div class="logo">
                <router-link class="logo_music" to="/recommend">网易云音乐</router-link>
                <ul class="m-nav j-tflag">
                  <li><span><a href="">发现音乐</a></span></li>
                  <li><span><a href="">我的音乐</a></span></li>
                  <li><span><a href="">朋友</a></span></li>
                  <li><span><a href="">商城</a></span></li>
                  <li><span><a href="">音乐城</a></span></li>
                </ul>
            </div>
            <div class="search">
                <input type="text" 
                    name="" 
                    id="" 
                    placeholder="音乐/电台/视频/用户" 
                    onsubmit="return false" 
                    v-model.trim.lazy="queryStr"
                    @keyup.enter="goSearch()">
            </div>
        </div>
        <div class="wrap">
            <ul>
                <li v-for="item in items" :key="item.id">
                    <router-link :to="`/${item.id}`"><em>{{item.name}}</em></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"HeaderComponent",
        data () {
            return {
                queryStr:'',
                items: [
                    {
                        id:'recommend',
                        name:'推荐'
                    },
                    {
                        id:'leaderboards',
                        name:'排行榜'
                    },
                    {
                        id:'songlist',
                        name:'歌单'
                    },
                    {
                        id:'anchorRadio',
                        name:'主播电台'
                    },
                    {
                        id:'singer',
                        name:'歌手'
                    },
                    {
                        id:'newAlbum',
                        name:'新碟上架'
                    }
                ]
            }
        },
        computed: {
        },
        methods: {
            goSearch() {
                this.$emit("searchQuery", this.queryStr)
                this.$router.push({
                    name:'search',
                    query:{
                        q: this.queryStr
                    }
                });
            }
        }
    }
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.m-subnav {
    z-index: 90;
    box-sizing: border-box;
    background-color: $red;
    border-bottom: 1px solid daken($red,5%);
    .mTop {
        background: $black;
        border-bottom:1px solid darken($black,5%);
        box-sizing: border-box;
        display: flex;
        justify-content:center;
        .logo {  
            display: flex;
            flex: flex-start;     
            .logo_music {
                text-indent: -999px;
                display: block;
                width: 176px;
                height: 69px;
                background: url('~@/assets/images/topbar.png') no-repeat 20px 0;
                
            }
            .m-nav{
                padding: 0 25px 0 10px;
                display: block;
                li{
                    height: 70px;
                    float: left;
                    &:hover {
                            background-color:#000000;
	                        color:$white;
                        }
                   
                    span{
                        a{
                        padding: 0 19px;
                        text-align: center;
                        line-height: 70px;
                        color: #ccc;
                        
                        }
                    }
                }
            }
        }
        .search {
            input {
                    margin-top: 19px;
                    background: url('~@/assets/images/topbar.png') no-repeat 0 -99px;
                    background-color: #fff;
                    border-radius: 32px;
                    padding: 8px 20px 8px 30px;
                    margin-right: 20px;
                    outline: 0;
                    width: 175px;
            }
        }
    }
    .wrap {
        width: 100%;
        margin: 0 auto;
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            li {        
                a {
                    color:$white;
                    padding:10px  20px;                    
                    display: inline-block;
                    em {                        
                        padding: 3px 10px;
                        border-radius: 11px;
                    }
                    &.router-link-active {
                        em {
                            background: darken($red,10%);
                        }
                    }
                }
                
            }
        }
    }
}
</style>
