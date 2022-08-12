<template>
    <div id="sgin">
        <header>
            <div>
                <img src="img/logo.ac5608f4.png" alt="">
            </div>
        </header>
        <main>
            <div class="box">
                <div>
                    <span>手机号</span>
                    <input type="text" placeholder="请输入手机号码">
                </div>
            
                <div class="login">
                    <router-link to="/my"><button>获得验证码登录</button></router-link>
                    <div class="clause">
                        <i></i>
                        我已阅读并同意
                        <router-link to="https://mst.vip.com/s/tgscus">《唯品会服务条款》</router-link>
                        、
                        <router-link to="https://move.vpal.com/terms.html">《唯品支付用户服务协议》</router-link>
                        、
                        <router-link to="https://mst.vip.com/s/i19bjx">《唯品会隐私政策》</router-link>
                    </div>
                
                </div>
                <div class="sgin">
                    <p>或</p>
                    <router-link to="/login"><button>密码登录</button></router-link>
                </div>
            </div>
        </main>
    </div>
</template>
<style>
*{
    margin: 0px;
    padding:  0px;
    list-style: none;
    text-decoration:none;
}
</style>
<style scoped>
header div{
    height: 64vw;
    background: url(../assets/login_bg.3a93a8bf.jpg)no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 64vw;
}
header img{
    height: 15vw;
    width: 35vw;
}
main div span{
    display: inline-block;
    width: 20vw;
    height: 10vw;
    line-height: 10vw;
    padding-left: 3vw;
    font-size: 4.5vw;
}
.box>div{
    border-bottom: 1px solid#eee;
    display: flex;
    justify-content: start;
    align-items: center; 
    
}
main div input{
    display: inline-block;
    border: none;
    width: 70vw;
    height: 6vw;
    font-size: 4.5vw;
}
main div button{
    margin-top: 5vw;
    display: block;
    padding: 0vw 1vw;
    cursor: pointer;
}
.box .login{
    display: block;
    border: none;
}
.login button{
    border: none;
    margin: 8vw auto;
    height: 11vw;
    width: 95vw;
    font-size: 4.5vw;
    background: #caccd2;
    color: #fff;
    border-radius: 5vw;
}
.clause{
    display: flex;
    justify-content: center;
    font-size:2.5vw;
    flex-wrap: wrap;
    align-items: center;
}
.clause2{
    display: flex;
    justify-content: end;
}
.clause2 a{
    font-size:2.5vw;
    color: #157efa;
    margin-right: 5vw;
}
.clause i{
    background: url(../assets/rectangle.5d636f59.png)no-repeat;
    background-size: 100%;
    width: 3vw;
    height: 3vw;
}
.clause a{
    /* font-size:2.5vw; */
    color: #157efa;
}
.box .sgin{
    display: block;
    border: none;
}
.sgin{
    margin-top: 5vw;
}
.sgin button{
    margin: 5vw auto;
    line-height: 9vw;
    padding: 0 3.5vw;
    height: 9vw;
    font-size: 3.5vw;
    border:1px solid #e4007f;
    background: #fff;
    color: #e4007f;
    border-radius: 4vw;

}
.box .sgin{
    border-top: 1px solid#dbdbdb;
    position: relative;
}
.sgin p{
    color: #dbdbdb;
    width: 10vw;
    font-size: 2vw;
    text-align: center;
    position: absolute;
    background: #fff;
    left: 45%;
    top: -8%;
}

</style>
<script>
// export default{
//     name:'sgin',
//     data(){
//         return{
//             isok:false,
//         }

//     },
//     mounted:{
        
//     }
// }
   
</script>
