<template>
    <div class="order">
        <div>
            <el-row>
                <el-col :span="7">
                    <el-tabs>
                        <el-tab-pane label="点餐">
                            <el-table :data="tableData" border style="width:100%;" max-height="500">
                                <el-table-column prop="goodsName" label="商品"></el-table-column>
                                <el-table-column prop="count" label="数量" width="70"></el-table-column>
                                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                                <el-table-column label="操作" width="150">
                                    <template slot-scope="scope">
                                        <el-button type="text" @click="addOrderList(scope.row)">增加</el-button>
                                        <el-button type="text" @click="reduceOrderList(scope.row,'reduce')">减少</el-button>
                                        <el-button type="text" @click="reduceOrderList(scope.row,'delete')">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="order-summary">
                                <span>数量：{{totalCount}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>金额：{{totalMoney}}</span>
                            </div>
                            <br>
                            <div style="text-align:center">
                                <!-- <el-button type="warning">挂单</el-button> -->
                                <el-button type="danger" @click="delAllOrder()">删除</el-button>
                                <el-button type="success" @click="checkOut()">结账</el-button>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="挂单">
                            挂单
                        </el-tab-pane>
                        <el-tab-pane label="外卖">
                            外卖
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                
                <el-col :span="17">
                    <div class="often-goods">
                       <div class="title">常用商品</div>
                        <div class="often-goods-list">
                            <ul>
                                <li v-for="item in oftenGoods" @click="addOrderList(item)">
                                    <span>{{item.goodsName}}</span>
                                    <span class="o-price">￥{{item.price}}元</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="17">
                    <div class="goods-type">
                        <el-tabs>
                            <el-tab-pane label="汉堡">
                                <ul class="cookList">
                                    <li v-for="item in type0Goods" @click="addOrderList(item)">
                                        <span class="foodImg"><img :src="item.goodsImg" alt="" width="100%"></span>
                                        <span class="foodName">{{item.goodsName}}</span><br>
                                        <span class="foodPrice">￥{{item.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="小食">
                                <ul class="cookList">
                                    <li v-for="item in type1Goods" @click="addOrderList(item)">
                                        <span class="foodImg"><img :src="item.goodsImg" alt="" width="100%"></span>
                                        <span class="foodName">{{item.goodsName}}</span><br>
                                        <span class="foodPrice">￥{{item.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <ul class="cookList">
                                    <li v-for="item in type2Goods" @click="addOrderList(item)">
                                        <span class="foodImg"><img :src="item.goodsImg" alt="" width="100%"></span>
                                        <span class="foodName">{{item.goodsName}}</span><br>
                                        <span class="foodPrice">￥{{item.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <ul class="cookList">
                                    <li v-for="item in type3Goods" @click="addOrderList(item)">
                                        <span class="foodImg"><img :src="item.goodsImg" alt="" width="100%"></span>
                                        <span class="foodName">{{item.goodsName}}</span><br>
                                        <span class="foodPrice">￥{{item.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'order',
    data(){
        return{
            tableData: [],
            oftenGoods:[
                {
                    goodsId:1,
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsName:'香脆鸡柳',
                    price:17
                }
            ],
            type0Goods:[],
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
            totalCount:0,
            totalMoney:0.00
        }
    },
    created(){
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(Response => {
            console.log(Response);
            this.type0Goods = Response.data[0];
            this.type1Goods = Response.data[1];
            this.type2Goods = Response.data[2];
            this.type3Goods = Response.data[3];
        })
        .catch(error => {
            console.log(error);
            alert('网络错误，不能访问');
        })
    },
    methods:{
        // 点单方法
        addOrderList(goods){
            let isHave = false;
            for(let i = 0; i < this.tableData.length; i++){
                if(this.tableData[i].goodsId == goods.goodsId){
                    isHave = true;
                }
            }

            if(isHave){
                let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
                // console.log(arr);
                arr[0].count++;
            }else{
                let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                this.tableData.push(newGoods);
            }
            this.getOrderTotal();
        },
        // 减少和删除订单方法
        reduceOrderList(goods,type){
            if(type == 'delete'){
                this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            }else{
                if(goods.count > 1){
                    goods.count--
                }else{
                    this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
                }

            }
            this.getOrderTotal();
        },
        //合计数量和金额
        getOrderTotal(){
            this.totalCount = 0;
            this.totalMoney = 0;
            this.tableData.forEach(element => {
                this.totalCount += element.count;
                this.totalMoney = this.totalMoney + (element.price*element.count);
            });
        },
        delAllOrder(){
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0.00;
        },
        checkOut(){
            if(this.totalCount != 0){
                this.$message({
                    message:'结账成功，谢谢使用！',
                    type:'success'
                });
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0.00;
            }else{
                this.$message({
                    message:'不能空结，请点单',
                    type:'warning'
                });
            }
        }
    }
}
</script>
    
<style>
    .order{
        width: 95%;
        height: 100%;
        float: left;
        /* background-color: bisque; */
    }
    .order-summary{
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #d3dce6;
    }
    .title{
        height: 20px;
        border-bottom: 1px solid #d3dce6;
        background-color: #f9fafc;
        padding: 10px;
    }
    .often-goods-list ul li{
        list-style: none;
        float: left;
        border:1px solid #e5e9f2;
        padding: 10px;
        margin: 5px;
        background-color: #fff;
        cursor: pointer;
    }
    .o-price{
        color:#59b7ff;
    }
    .cookList li{
        list-style: none;
        width: 23%;
        border: 1px solid #e5e9f2;
        height: auto;
        overflow: hidden;
        background-color: #fff;
        padding: 2px;
        float: left;
        margin:2px;
        cursor: pointer;
    }
    .cookList li span{
        display: block;
        float: left;
    }
    .foodImg{
        width: 40%;
    }
    .foodName{
        font-size: 18px;
        padding-left: 10px;
        color: brown;
    }
    .foodPrice{
        font-size: 16px;
        padding-left: 10px;
        padding-top: 10px;
    }
</style>

