<template>
    <div>尘世</div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'City',
    methods: {
        getCityInfo () {
            axios.get(`https://card.wecity.qq.com/feverHosp/feverHospList?cityCode=11000&pageIndex=1&pageSize=999&partnerType=4&lat=0&lng=0&searchKey=`)
                .then(this.handleGetCityInfo)
        },
        handleGetCityInfo (res) {
            res = res.data;
            console.log(res);
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style scoped>

</style>