<template>
   <div> 
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
                <div class="panel-body" v-for="city of province.citys" :key="city.cityCode"  @click="handleGetCity(city.cityCode)">
                    {{city.cityName}} -- 共{{city.count}}家医院
                </div>
            </div>
        </div>
    </div>
    <City  v-bind:code="cityId"/>
   </div> 
</template>

<script>
    import { getHospitalData } from "../../public/service/getData";
    import City from "./city/City";
    export default {
        name: "Hospital",
        components: {
            City,
        },
        data() {
            return {
                provinces: [],
                cityId: '',
            }
        },
        async mounted() {
            await this.getData();
        },
        methods: {
            async getData() {
                await getHospitalData().then(data => this.provinces = data.data.data.provinces);      
            },
            handleGetCity(cityCode) {
                this.cityId = cityCode;
            }
        }
    }
</script>

<style scoped>
    #hospital {
        /* height: 100vh; */
        background: url('../assets/blue.png') no-repeat;
        background-size: cover;
    }
</style>