<template>
    <div id="list">
        <header>
            <div></div>
            <div class="search"><van-icon name="search" size="6vw"/></div>
        </header>
        <div class="mid">
            <div class="bg">
                <img src="img/listbg.webp" alt="">
            </div>
            <div class="bgup" >
                <div class="box" v-for="(item,index) in list" :key="index">
                    <div>
                        <div>
                        <img :src="item.a1" alt="">
                        </div>
                        <p>{{item.a2}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot">
            <img src="img/1607070400360.gif" alt="">
        </div>
        <div class="banner">
            <ul>
                <li>
                    <img src="img/banner1.webp" alt="">
                    <p>申米</p>
                </li>
                <li>
                    <img src="img/banner2.webp" alt="">
                    <p>香影</p>
                </li>
                <li>
                    <img src="img/banner1.webp" alt="">
                    <p>申米</p>
                </li>
                <li>
                    <img src="img/banner2.webp" alt="">
                    <p>香影</p>
                </li>
                <li>
                    <img src="img/banner1.webp" alt="">
                    <p>申米</p>
                </li>
                <li>
                    <img src="img/banner2.webp" alt="">
                    <p>香影</p>
                </li>
                <li>
                    <img src="img/banner1.webp" alt="">
                    <p>申米</p>
                </li>
                <li>
                    <img src="img/banner2.webp" alt="">
                    <p>香影</p>
                </li>
            </ul>
        </div>
        <div class="list">
            <div class="box">
                <div v-for="(item,index) in list2" :key="index">
                    <router-link to="/ware"><img :src="item.a1" alt=""></router-link>
                    <p>{{item.a2}}</p>
                    <p>
                        <span>{{item.a3}}</span>
                        <span>{{item.a4}}</span>                        
                    </p>
                </div>
            </div>    
        </div>
        <div class="totop" v-on:click="totop"><van-icon name="down" size="8vw" color="#fff"/></div>
    </div>
    
</template>
<style scoped>
#list{
    background-color: #f3f4f4;
    height: 100%;
    overflow: hidden;
}
header{
    width: 100vw;
    height: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;
}
header div:nth-of-type(1){
    width: 90vw;
    height: 8vw;
    border: 1px solid#edeeee;
    background: #f3f4f4;   
}
.search{
    position: absolute;
    width: 5vw;
    height: 5vw;
    right: 9vw;
    top: 3vw;
    opacity: 0.5;
}
.bg{
    position: relative;
}
.bg img{
    width: 100%;
    height: 57vw;
}
.hot{
    position: absolute;
    top: 13vw;
    left: 15vw;
    
}
.hot img{
    width: 8vw;
    height: 8vw;
}
.bgup{
    position: absolute;
    top: 16vw;
    left: 1vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.box>div{
    margin: 2vw 2vw;
}
.box>div>div{
    overflow: hidden;
    border-radius: 50%;
    width: 14.6vw;
    height: 14.6vw;
    background: #edeeee;
}
.box>div p{
    text-align: center;
    font-size: 3.5vw;
    margin-top: 3vw;
}
.box>div>div img{
    width: 14.6vw;
    height: 14.6vw;
}
.banner ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2vw auto;
}
.banner li{
    background: #fff;
    border-radius: 2vw;
    margin: 1vw 1vw;
    width: 23vw;
    height: 18vw;
    text-align: center;
}
.banner img{
    margin-top: 3vw;
    width: 13vw;
    height: 6.5vw;
}
.banner p{
    font-size: 2vw;
}
.list .box{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.list .box div{
    width: 45vw;
    margin: 2vw auto;
    border-radius: 3vw;
    overflow: hidden;
    background: #fff;
}
.list img {
    width: 47vw;
    height: 47vw;
}
.list p{
    margin: 2vw 2vw;
    font-size: 5vw;
}
.list p:nth-of-type(2){
    font-size: 2vw;
    color: #999;
}
.list span:nth-of-type(1){
    color: #d34ba8;
}
.totop{
    position: fixed;
    bottom: 5vw;
    right: 5vw;
    transform: rotate(180deg);
    width: 10vw;
    height: 10vw;
    background: #222222e6;
    border-radius: 50%;
    text-align: center;
    line-height: 13vw;
}
</style>
<script>
export default {
    data(){
        return{
            list:[
                {
                    a1:'img/bgup1.webp',
                    a2:'连衣裙'
                },
                {
                    a1:'img/bgup2.webp',
                    a2:'衬衫'
                },
                {
                    a1:'img/bgup3.webp',
                    a2:'外装'
                },
                {
                    a1:'img/bgup1.webp',
                    a2:'连衣裙'
                },
                {
                    a1:'img/bgup2.webp',
                    a2:'衬衫'
                },
                {
                    a1:'img/bgup3.webp',
                    a2:'外装'
                },
                {
                    a1:'img/bgup1.webp',
                    a2:'连衣裙'
                },
                {
                    a1:'img/bgup2.webp',
                    a2:'衬衫'
                },
                {
                    a1:'img/bgup3.webp',
                    a2:'外装'
                },
                {
                    a1:'img/bgup4.webp',
                    a2:'更多频道'
                },
            ],
            list2:[
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/list1.webp',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
            ]
        }    
    },
    methods:{  
        totop(){
            document.documentElement.scrollTop = 0;
        }
      }
}
</script>