<template>
    <div id="SingersComponent">
        <ul class="searchsingerList" v-if="singersData">
            <li v-for="(itemx,idx) in singersData" :key="idx">
                <router-link :to="`/artist?id=${itemx.id}&avator=${itemx.picUrl}&name=${itemx.name}`">
                <div class="head">
                    <img :src="itemx.picUrl | fiterAvator | filterImg" />
                </div>
                </router-link>
                <router-link :to="`/artist?id=${itemx.id}&avator=${itemx.picUrl}&name=${itemx.name}`">
                <div class="ifo">
                    <h4>
                    <span>{{itemx.name}}</span>
                    </h4>
                    <p class="">暂无此API</p>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"SingersComponent",
        props:['singersData'],
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
<style lang="scss">
.searchsingerList{
    li{
    float: left;
    width: 210px;
    height: 62px;
    margin-top: 14px;
    background: #fafafa;
        .head{
                
                float: left;
                width: 62px;
                height: 62px;
        img{
                float: left;
                width: 62px;
                height: 62px;
        }
        }
        .ifo{
    float: left;
    width: 133px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
        .f-thide{
            display: block;
                padding: 0;
                margin: 0;
                width: 90%;
                margin-top: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }
        h4{
            padding: 0;
            margin: 0;
            margin-top: 8px;
            font-size: 100%;
            span{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                    width: 90%;
                    font-size: 14px;
            }
        }
        }
    }
}
</style>
