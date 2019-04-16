<template>
    <div class="page">
        <img style="width: 100%" :src="url" mode="widthFix" />
        <div class="div mensClothing">
            <p>Shop men's clothing</p>
            <img class="img1" src="https://images-na.ssl-images-amazon.com/images/G/01/prod/CUTT_2983510f-06e5-11e9-aa9b-57d33a555df7._SX700_CB460164815_.png" alt="">
        </div>
        <div class="div mensClothing">
            <p>Shop by style</p>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'shoppingMail',
                url: 'https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/Karu/English/2018/October/Karu_EN_Confidence_V2._SX828_CB480795348_.png'
            }
        },   
    }
</script>

<style lang="less" scoped>
    * {
        border: 0;
        margin: 0;
        padding: 0;
    }
    .page {
        background: #d5dbdb;
    }
    .testRow {
        text-align: center;
    }
    .img1 {
        width: 100%;
    }
    .div {
        padding: 10px 15px 0 15px;
        background: white;
        font-size: 20px;
        margin-bottom: 4.5px;
        padding-bottom: 5px;
        font-weight: 300;
        font-family: "Amazon Ember",Arial,sans-serif;
        p {
            margin-bottom: 15px;
        }
    }
</style>