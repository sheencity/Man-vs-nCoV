<template>
    <div class="panel-group" id='hospital'>
        <div class="panel panel-default" v-for="province of provinces" :key="province.id">
            <div class="panel-heading">
                <div class="panel-title">
                    <a data-toggle="collapse" data-parent="#hospital" :href="'#'.concat(province.id)">
                        {{ province.provinceName}}
                    </a>
                </div>
            </div>
            <div :id="province.id" class="panel-collapse collapse">
            <router-link to="/city">
                <div class="panel-body" v-for="city of province.citys" :key="city.cityCode" >
                    {{city.cityName}} -- 共{{city.count}}家医院
                </div>
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
    import { getHospitalData } from "../../public/service/getData";
    export default {
        name: "Hospital",
        data() {
            return {
                provinces: [],
            }
        },
        async mounted() {
            await this.getData();
        },
        methods: {
            async getData() {
                await getHospitalData().then(data => {this.provinces = data.data.data.provinces; console.log(this.provinces)});      
            }
        }
    }
</script>

<style scoped>
    #hospital {
        height: 100vh;
        background: url('../assets/blue.png') no-repeat;
        background-size: cover;
    }
</style>