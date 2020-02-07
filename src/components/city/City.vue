<template>
    <div id="main">
        <div v-for="(hospital, index) of hospitals" :key="hospital.id" class='hos-blo'>
            <div class="blo"><span class="circle">{{index + 1}}</span><span class="hos-name">{{hospital.orgName}}</span></div>
            <div class="blo"><span class="core" v-if="hospital.isCore">医疗救治定点医院</span><span class="fever" v-if="hospital.isFever">发热门诊</span></div>
            <div class="blo address">{{hospital.orgAddr}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'City',
    props: ["code"],
    data () {
        return {
            hospitals: [],
            cityCode: '',
        }
    },
    methods: {
        getCityInfo () {
            axios.get(`https://card.wecity.qq.com/feverHosp/feverHospList?cityCode=${this.code}&pageIndex=1&pageSize=999&partnerType=4&lat=0&lng=0&searchKey=`)
                .then(this.handleGetCityInfo)
        },
        handleGetCityInfo (res) {
            res = res.data;
            if (res.data) {
                const data = res.data;
                this.hospitals = data.data;
            }
        }
    },
    watch: {
        code: {
            handler(newValue, oldValue) {
                this.cityCode = newValue;
                if(newValue !== oldValue) {
                    this.getCityInfo();
                }
            },
            deep: true
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style scoped>
    #main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .blo {
        padding: 2px;
        text-align: left
    }
    .circle {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 10px; 
        background: #999;
    }
    .hos-blo {
        width: 100%;
        /* height: 60px; */
        border-bottom: 1px solid #999; 
    }
    .hos-name {
        font-size: 20px;
        font-weight: bold;
        padding-left: 10px;
    }
    .core {
        display: inline-block;
        width: 150px;
        height: 30px;
        margin-left: 20px;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        background: #f33;
        color: #fff;
        border-radius: 10px; 
    }
    .fever {
        display: inline-block;
        width: 90px;
        height: 30px;
        margin-left: 20px;
        text-align: center;
        line-height: 30px;
        background: #fc0;
        color: #fff;
        font-size: 16px;
        border-radius: 10px; 
    }
    .address {
        margin-left: 20px;
        font-size: 20px;
    }
</style>