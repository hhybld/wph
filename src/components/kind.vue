<template>
    <div id="kind">
        <header>
            <div></div>
            <div class="search"><van-icon name="search" size="6vw"/></div>
        </header>
        <main>
            <ul >
                <li v-on:click='change(index)' :class='currentIndex==index?" active":""' :key='item.id' v-for='(item,index) in list'>{{item.a1}}</li>
            </ul>
            <div class="box">
                <div :class='currentIndex==index?"current":""' :key='item.id' v-for='(item,index) in list'>
                    <img :src="item.a2" alt="" class="big">
                    <h2>{{item.a3}}</h2>
                    <ul>
                        <li v-for="(item,index) in list2" :key="index">
                            <img :src="item.a1" alt="">
                            <p>{{item.a2}}</p>
                            </li>
                    </ul>
                    <h2>{{item.a3}}</h2>
                    <ul>
                        <li v-for="(item,index) in list2" :key="index">
                            <img :src="item.a1" alt="">
                            <p>{{item.a2}}</p>
                            </li>
                    </ul>
                    <h2>{{item.a3}}</h2>
                    <ul>
                        <li v-for="(item,index) in list2" :key="index">
                            <img :src="item.a1" alt="">
                            <p>{{item.a2}}</p>
                            </li>
                    </ul>
                    <h2>{{item.a3}}</h2>
                    <ul>
                        <li v-for="(item,index) in list2" :key="index">
                            <img :src="item.a1" alt="">
                            <p>{{item.a2}}</p>
                        </li>
                    </ul>
                    <router-link to="/list">{{item.a4}}</router-link>
                    
                </div>
                 
            </div>
        </main>
    </div>
</template>
<style scoped>
#kind{
    background-color: #f3f4f5;
    height: 100%;
}
header{
    width: 100vw;
    height: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
header div:nth-of-type(1){
    width: 90vw;
    height: 8vw;
    border: 1px solid#edeeee;
    border-radius: 3vw;
    color: #f3f4f4;   
}
.search{
    position: absolute;
    width: 5vw;
    height: 5vw;
    right: 9vw;
    top: 3vw;
    opacity: 0.5;
}
main{
    display: flex;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;;
    
}
main>ul{
    width: 23vw;
    overflow: hidden;
    height: 100%;
}
main>ul>li{
    width: 23vw;
    height: 15vw;
    text-align: center;
    line-height: 15vw;
    font-size: 4vw;

}
main .box{
    height: 100%;
    width: 77vw;
    overflow: hidden;
    background: #fff;
}
main .box div{
    margin: 3vw 4vw 3vw 5vw;
    display: none;
}
.active{
    background: #fff;
    border-left: 1vw solid red;
}
.current { 
    display: block !important;
}
main .box div .big{
    width: 100%;
    height: 27vw;
}
h2{
    margin: 6vw 0 3vw 0;
    font-size: 3.5vw;
    color: #000;
}
.box ul {
    display: flex;
	flex-wrap: wrap;
    justify-content: center;
    border-bottom: 1px solid#ccc;
}
.box li{
    width: 33.3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.box li img{
    width: 16.5vw;
    height: 16.5vw;
}
.box li p{
    text-align: center;
    font-size: 3.5vw;
    margin: 3vw auto 5vw auto;
}
.box a{
    display: block;
    text-align: center;
    line-height: 10vw;
    font-size: 3.5vw;
    width: 100%;
    height: 10vw;
    margin: 3vw auto 3vw auto;
    background: #fcf0f7;
    color: #d372a7;
}
</style>
<script>
export default {
    data(){
        return{
            currentIndex: 0,
            list:[
                {
                id:1,
                a1:'女装',
                a2:'img/kindbig1.png',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:2,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:3,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:4,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:5,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:6,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:7,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:8,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:9,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:10,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:11,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:12,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:13,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:14,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:15,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:16,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            {
                id:17,
                a1:'男装',
                a2:'img/kindbig2.jpg',
                a3:'热门分类',
                a4:'进入女装频道 >'
            },
            ],
            list2:[
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
                {
                    a1:'img/kinds1.jpg',
                    a2:'连衣裙'
                },
            ]
        }
    },
    methods: {
                // 在这里实现选项卡切换操作：本质就是操作类名
                // 如何操作类名？就是通过currentIndex
                change: function(index) {
                    this.currentIndex = index
                }
            }

}
</script>