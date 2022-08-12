<template>
    <div id="index">
        <header>
            <div class="box1">
                <div>
                    <img src="img/toplogo.png" alt="">
                    <b></b>
                    <p>品牌特卖·100%正品</p>
                </div>
                <div>
                    <router-link to="/login"><p>登录</p></router-link>
                    <router-link to="/kind"><van-icon name="apps-o" size="6.5vw"/></router-link>
                </div>
            </div>
            <div class="box2">
                <div class="search"></div>
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#eaebef">
                    <van-swipe-item>手机</van-swipe-item>
                    <van-swipe-item>女装</van-swipe-item>
                    <van-swipe-item>男装</van-swipe-item>
                    <van-swipe-item>电脑</van-swipe-item>
                </van-swipe>
            </div>
        </header>
        <nav>            
            <router-link to="/index">推荐</router-link>                
            <router-link to="">3折疯抢</router-link>
            <router-link to="">唯品快抢</router-link>
            <router-link to="">国际</router-link> 
        </nav>
        <section>
            <div class="head">
                <div class="box1">
                    <img src="img/bg1.jpg" alt="">
                </div>
                <div class="box2">
                    <img src="img/bg2.png" alt="">
                    <img src="img/bg3.png" alt="">
                    <img src="img/bg4.png" alt="">
                </div>
            </div>
            <div class="mid">
                <div class="box1">
                    <img src="img/mid1.png" alt="">
                </div>
                <div class="box2">
                    <img src="img/mid2.png" alt="">
                </div>
                <div class="box3">
                    <img src="img/mid3.png" alt="">
                    <img src="img/mid3.png" alt="">
                    <img src="img/mid3.png" alt="">
                    <img src="img/mid3.png" alt="">
                </div>
            </div>
            <div class="nav">
                <div class="tuWap" @touchstart="touchStart" @touchend="touchEnd">
                    <div class="youceBig">
                        <div class="youce">
                            <div>
                                <img src="img/hdl.png" alt="">
                                <img src="img/hdr.png" alt="">
                            </div>
                            <div>
                                <img src="img/hdl.png" alt="">
                                <img src="img/hdr.png" alt="">
                            </div>
                            <div>
                                <img src="img/hdl.png" alt="">
                                <img src="img/hdr.png" alt="">
                            </div>
                            <div>
                                <img src="img/hdl.png" alt="">
                                <img src="img/hdr.png" alt="">
                            </div>
                            <div>
                                <img src="img/hdl.png" alt="">
                                <img src="img/hdr.png" alt="">
                            </div>
                            <div>
                                <img src="img/hdl.png" alt="">
                                <img src="img/hdr.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="fenyeqi">
                        <div class="dangqianYe"></div>
                    </div>
                </div>
            </div>
            <div class="temai">
                <div class="box1">
                    <img src="img/tm.png" alt="">
                </div>
                <div class="box2">
                    <div>
                        <img src="img/tm1.jpg" alt="">
                        <span>领10￥券</span>
                        <span>￥59</span>
                    </div>
                    <div>
                        <img src="img/tm1.jpg" alt="">
                        <span>领10￥券</span>
                        <span>￥59</span>
                    </div>
                    <div>
                        <img src="img/tm1.jpg" alt="">
                        <span>领10￥券</span>
                        <span>￥59</span>
                    </div>
                   <div>
                        <img src="img/tm1.jpg" alt="">
                        <span>领10￥券</span>
                        <span>￥59</span>
                    </div>
                </div>
            </div>
            <div class="list">
                <div v-for="(item,index) in list" :key="index">
                    <router-link to="/ware"><img :src="item.a1" alt=""></router-link>
                    <p>{{item.a2}}</p>
                    <p>
                        <span>{{item.a3}}</span>
                        <span>{{item.a4}}</span>                        
                    </p>
                </div>
            </div>
        </section>
        <footer>
                <div class="footer_nav">
                    <div>
                        <router-link to="/index">唯品会首页</router-link>
                        <router-link to="">关于我们</router-link>
                    </div>  
                    <div>
                        <router-link to="/login">登录</router-link>
                        <router-link to="/sgin">注册</router-link>
                    </div>
                </div>
                <div class="footer_safe">
                    <p>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
                    <p><i></i>粤公网安备 44010302000068号</p>
                </div>
            </footer>
    
            <div class="buy"><router-link to="/buy"><van-icon name="shopping-cart-o" size="8vw" color="#fff"/></router-link></div>
            <div class="totop" v-on:click="totop"><van-icon name="down" size="8vw" color="#fff"/></div>
    </div>
</template>
<style scoped>
#index{
    overflow: auto;
    width: 100%;
    height: 100%;
    position: relative;
}
header .box1{
    height: 12vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header .box1 div:nth-of-type(1){
    display: flex;
    justify-content: start;
    align-items: center;
}
header .box1 b{
    width: 0.25vw;
    height: 5vw;
    margin: 0 1.25vw;
    background: #eaebef;
}
header .box1 p{
    color: #98989f;
    font-size: 3.5vw;
}
header .box1 a{
    color: #000;
    margin: 0 3vw;
}
header .box1 div:nth-of-type(2){
    display: flex;
    justify-content: end;
    align-items: center;
}
header .box1 img{
    height: 5.5vw;
    width: 20vw;
}
.my-swipe .van-swipe-item {
    
    color: #ccc;
}
.box2 .search{
    background: #eaebef;
    border: 1px solid#ccc;;
    border-radius: 5vw;
    width: 90vw;
    margin: 0 auto;
    height: 8vw;
    position: relative;
}
.my-swipe{
    position: absolute;
    left: 6vw;
    top: 13vw;
    width: 90%;
    font-size: 4.5vw;
    overflow: hidden;
}
nav {
    display: flex;
    justify-content: center;
    background: #fff;
}
nav a{
    font-size: 3.5vw;
    color: #666;
    margin: 5vw 6vw 0 6vw;
    padding-bottom: 1vw;
}
nav a:nth-of-type(1){
    color: #d34ba8;
    border-bottom: 1vw solid#d34ba8;
}
section{
    position: relative;
    background: #ccc;
}
section .head{
    position: relative;
    height: 63vw;
    margin: 1vw 0;
    
}
.head .box1{
    z-index: 1;
    position: absolute;
    width: 100%;
}
.head .box1 img{
    width: 100%;
}
.head .box2{
    z-index: 3;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 21vw;
    left: 2vw;
}
.head .box2 img{
    width: 30vw;
    height: 40vw;
    margin: 0 1vw;
}
.mid{
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
    background: #000;
    border-radius: 5vw;
    height: 30vw;
    position: relative;
}
.mid .box1 img{
    height: 30vw;
    width: 50vw;
}
.mid .box2 img{
    height: 30vw;
    width: 50vw;
}
.mid .box3 img:nth-of-type(1){
    position: absolute;
    z-index: 3;
    left: 5vw;
    top: 7vw;
    height: 20vw;
}
.mid .box3 img:nth-of-type(2){
    position: absolute;
    z-index: 3;
    left: 26.5vw;
    top: 7vw;
    height: 20vw;
}
.mid .box3 img:nth-of-type(3){
    position: absolute;
    z-index: 3;
    left: 53.5vw;
    top: 7vw;
    height: 20vw;
}
.mid .box3 img:nth-of-type(4){
    position: absolute;
    z-index: 3;
    left: 75.5vw;
    top: 7vw;
    height: 20vw;
}
.nav{
    overflow: hidden;
}
.youce{
    width: 2000vw;
    display: flex;
    justify-content: start;
}
.nav img{
    height: 20vw;
    width: 20vw;
}
.temai {
    position: relative;
}
.temai .box1 img{
    width: 100%;
    height: 43.5vw;
}
.temai .box2 img{
    width: 22vw;
    height: 22vw;
}
.temai .box2{
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    left: 5vw;
    top: 8vw;
}
.temai .box2 div{
    display: flex;
    flex-wrap: wrap;
    width: 22vw;
    margin: 0 0.3vw;
}
.temai .box2 span{
    display: flex;
    width: 22vw;
    font-size: 3.5vw;
    justify-content: center;
    
}
.temai .box2 span:nth-of-type(1){
    color: #d34ba8;
}
section .list{
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
}
section .list div{
    width: 90vw;
    margin: 2vw auto;
    border-radius: 3vw;
    overflow: hidden;
    background: #fff;
}
section .list img {
    width: 100%;
    height: 45vw;
}
section .list p{
    margin: 2vw 2vw;
    font-size: 5vw;
}
section .list p:nth-of-type(2){
    font-size: 2vw;
    color: #999;
}
section .list span:nth-of-type(1){
    color: #d34ba8;
}
footer{
    height: 30vw;
    border-top: 1px solid #ccc;
    width: 100%;
    background: #f3f4f5;
    color: #000;
}
.footer_nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer_nav a{
    font-size: 4vw;
    width: 20vw;
    color: #585c64;
    margin-left: 2vw;
}
.footer_safe p{
    margin-top: 5vw;
    text-align: center;
    font-size: 3vw;
    color: #ccc;
}
.footer_safe i{
    display: inline-block;
    background: url(../assets/badge.png)no-repeat;
    background-size: 100%;
    width: 5vw;
    height: 5vw;
}
.footer_safe p{
    margin-bottom: 5vw;
}
.footer_safe p:nth-of-type(2){
    display: flex;
    align-items: center;
    justify-content: center;
}
.buy{
    position: fixed;
    bottom: 5vw;
    left: 5vw;
    background: #222222e6;
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    text-align: center;
    line-height: 13vw;
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
         data() {
        return {
            startX: '', //鼠标开始坐标
            endX: '',   //鼠标结束坐标
            index:0,    //当前轮播图下标 
            list:[
                {
                    a1:'img/1.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/2.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/3.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/4.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/5.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/6.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/7.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/8.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/9.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/10.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/1.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/2.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/3.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/4.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/5.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/6.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/7.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/8.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/9.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/10.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/1.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/2.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/3.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/4.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/5.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/6.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/7.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/8.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/9.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
                {
                    a1:'img/10.jpg',
                    a2:'诗繁离专场',
                    a3:'1',
                    a4:'折起'
                },
            ]
        }
      },
        
      methods:{
          touchStart(e) {
            this.startX = e.touches[0].clientX;
        },
        touchEnd(e){
            this.endX = e.changedTouches[0].clientX;
            // 在滑动超过一定的距离时再切换题目
            if (Math.abs(this.endX - this.startX) < 10) return;
            // 判断，向左还是向右
            if (this.endX > this.startX) { //向左
              if (this.index - 1 >= 0) this.index-=1;
            } else {  //向右
              if (this.index + 1 < 3) this.index+=1;
            }
            // 当前平移距离
            let pianyiX = -30 * this.index;
            // 当前分页器按钮位置
            let fenyeIndex=30 * this.index
            document.getElementsByClassName('youce')[0].style.transform = `translateX(${pianyiX}vw)`;
            document.getElementsByClassName('dangqianYe')[0].style.marginLeft = `${fenyeIndex}%`;
        },
        totop(){
            document.documentElement.scrollTop = 0;
        }
      }
}
</script>