<template>
    <div id="ToplistComponent">
        <div class="n-blist" id="top-flag">
                <dl class="blk">
                    <dt class="top"> 
                        <div class="cver u-cover u-cover-4">
                            <img src="https://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                            <a class="msk" title="云音乐飙升榜"></a>
                        </div>
                            <div class="tit">
                                <a href="" title="云音乐飙升榜"></a>
                                <h3 class="f-fs1 f-thide">云音乐飙升榜</h3>
                                <div class="btn">
                                    <a  href="#" class="s-bg-9"><i class="el-icon-video-play"></i></a>
                                    <a  href="#" class="s-bg-9"><i class="el-icon-folder-add"></i></a>
                                </div>
                            </div>
                    </dt> 

                        <dd>
                            <ol>
                                <li  v-for="(itemx,idx) in toplistData" :key="idx" class="js-dis"><span class="no no-top">{{ idx + 1 }}</span><a  class="nm" href="">{{ itemx.name }}</a>
                                <div class="oper">
                                    <a href="" title="播放"><i class="el-icon-video-play"></i></a>
                                    <a href="" title="添加到播放列表"><i class="el-icon-plus"></i></a>
                                    <a href="" title="收藏"><i class="el-icon-folder-add"></i></a>
                                </div>
                            </li>
                                <li class="js-dis"><span class="no no-top">2</span><a href="">123</a>
                                    <div class="oper"></div></li>
                            </ol>
                           
                        </dd>
                         <div class="more"><a href="#" class="s-fc0">查看全部&gt;</a></div>
                </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ToplistComponent",
        props: [ 'toplistData', 'title', 'newsongData'],
        data () {
            return {
                
            }
        },
        computed:{
        
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

div dl dd ol{
    display: block;
}
.n-blist{
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    .blk{
    float: left;
    width: 230px;
    height: 472px;
    .top{
    height: 120px;
    padding: 20px 0 0 19px;
    background-color: #F4F4F4;
        .cver{
        float: left;
        display: inline;
        }
        .u-cover-4{
        width: 80px;
        height: 80px;
        }
        .u-cover{
            position: relative;
            img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border: 0;
            }
            .msk{
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 80px;
                    height: 14px;
                    background: url('~@/assets/images/coverall.png')  no-repeat 0px -825px;
            }

        } //cover 结束
        .tit{
                float: left;
                width: 116px;
                margin: 6px 0 0 15px;
                .btn{
                    margin-top: 8px;
                    font-size: 26px;
                    a{
                        display: block;
                        float: left;
                        width: 22px;
                        height: 22px;
                        margin-right: 15px;
                    }
                }
        }
    } //top 结束
    dd{
        height: 321px;
        overflow:hidden;
    ol{
    height: 319px;
    margin-left: 35px;
    line-height: 32px;
    
        li{
            display: list-item;
            height: 32px;
            .no{
                    float: left;
                    position: relative;
                    width: 35px;
                    height: 32px;
                    margin-left: -35px;
                    text-align: center;
                    color: #666;
                    font-size: 16px;
            }
             .no-top{
                color: #c10d0c;
            }
                &:nth-of-type(odd){ background:#E8E8E8;
                    span{
                        background:#E8E8E8;
                    }
                }
                &:nth-of-type(even){ background:#F4F4F4;
                span{
                        background:#F4F4F4;
                    }
                }
            
            .nm{
                    float: left;
                    width: 125px;
                    height: 32px;
                    text-decoration: none;
                    overflow: hidden;
            }
            a:hover{
               text-decoration:underline;
            }
             .oper{
                 display: none;
                float: left;
                font-size: 17px;
                margin-right: 5px;
            }
            &:hover{
            .oper{
                display: block;
                float: left;
                font-size: 17px;
                margin-right: 5px;
            }
            }
        } //li 结束

        
    } //ol 结束
    } //dd 结束
        .more{
    clear: both;
    height: 32px;
    text-align: right;
    line-height: 32px;
    background-color: #E8E8E8;
        .s-fc0{
         font-size: 13px;
        color: #000;
        margin-right: 22px;
        }
    }
    } //blk 结束
}

</style>


