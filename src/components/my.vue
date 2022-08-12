<template>
    <div id="my">
        <header>
            <div class="box1">
                <div>
                    <span v-on:click="back"><van-icon name="arrow-left" size="6vw"/></span>
                </div>
                <div>
                    <router-link to="/index"><van-icon name="wap-home-o" size="6vw"/></router-link>
                    </div>
            </div>
            <div class="box2">
                <img src="img/touxiang_bg.png" alt="">
                <img src="img/touxiang.png" alt="">
            </div>
            <div class="box3">
                <img src="img/level.png" alt="">
                <p>银卡会员</p>
            </div>
            <div class="box4">
                <p>唯品会会员</p>
            </div>
        </header>
        <nav>
            <div>
                <router-link to="">
                    <van-icon name="peer-pay" size="6vw" />
                    <p>待支付</p>
                </router-link>
            </div>
            <div>
                <router-link to="">
                    <van-icon name="ecard-pay" size="6vw" />
                    <p>待收货</p>
                </router-link>
            </div>
            <div>
                <router-link to="">
                    <van-icon name="description" size="6vw"/>
                    <p>全部账单</p>
                </router-link>
            </div>
        </nav>
        <main>
            <ul>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <p>我的收藏</p>
                        <van-icon name="arrow" size="4.5vw" />
                    </router-link>
                </li>
                
            </ul>
            <div class="loginout">
                退出登录
            </div>
            <footer>
                <div class="footer_nav">
                    <router-link to="/index">
                        唯品会首页
                    </router-link>
                    <router-link to="">
                        关于我们
                    </router-link>
                    <router-link to="" v-on:click="toTop">
                        个人中心
                    </router-link>
                </div>
                <div class="footer_safe">
                    <p>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
                    <p><i></i>粤公网安备 44010302000068号</p>
                </div>
            </footer>
        </main>
        
    </div>
</template>
<style scoped>
#my{
    overflow: auto;
}
header{
    height: 56vw;
    width: 100%;
    background: url(../assets/user-login-bg.png)no-repeat;
    background-size: 100%;
}
.box1{
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box1 a{
    color: #000;
}
.box1 i{
    margin: 3.5vw 3.5vw;
}
.box2{
    height: 17vw;
    width: 100%;
    position: relative;
}
.box2 img:nth-of-type(1){
    position: absolute;
    top: -3.5%;
    left: 40.5%;
    border-radius: 50%;
    width: 20vw;
    height: 20vw;
}
.box2 img:nth-of-type(2){
    position: absolute;
    left: 41%;
    width: 19vw;
    height: 19vw;
}
.box3{
    height: 11vw;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box3 img{
    height: 5vw;
    width: 5vw;
}
.box3 p{
    color: #999;
    font-size: 3vw;
}
.box4{
    height: 11vw;
    width: 100vw;
    text-align: center;
    line-height: 11vw;
}
nav{
    display: flex;
    justify-content: space-around;
    padding-bottom: 2vw;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5vw;
}
nav div{
    width: 33.3vw;
    display: flex;
    justify-content: center;
}
nav i{
    background: #fcf9f1;
    border-radius: 50%;
    width: 8vw;
    height: 8vw;
    line-height: 8vw;
}
nav a{
    text-align: center;
    color: #585c64;
}
main{
    border-top: 1px solid#ccc;
}
main a{
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #555;
    align-items: center;
}
main li{
    height: 13vw;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
}
main p{
    margin-left: 4vw;
    font-size: 4.5vw;
}
main i{
    margin-right: 4vw;
}
main .loginout{
    width: 100%;
    height: 13vw;
    line-height: 13vw;
    font-size: 4.5vw;
    text-align: center;
    color: #555;
    border-bottom: 1px solid #ccc; 
    border-top: 1px solid #ccc;
    margin: 5vw auto;
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
    font-size: 3.5vw;
    width: 20vw;
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
</style>
<script>
export default{
    // name:'my',
    // data(){
    //     return{
            
    //     }
    // },
    methods:{
        back(){
            this.$router.go(-1);
        },
        toTop(){
            document.documentElement.scrollTop = 0;
        }
},
}
</script>