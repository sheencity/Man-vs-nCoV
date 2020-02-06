<template>
  <div id="map"></div>
</template>

<script>
import * as echarts from "echarts";
// import * as _ from "lodash";
import { getAreaData } from "../../public/service/getData";

export default {
  name: "home",
  props: {
    msg: String
  },
  data() {
    return {
      liveData: null
    };
  },
  components: {},
  async mounted() {
    import(`echarts/map/json/china.json`).then(map => {
      echarts.registerMap("china", map.default);
    });
    this.initData();
  },
  methods: {
    getCount() {},
    async getOption() {
        const provinceData = await getAreaData().then(data => data.data);
    let data = provinceData.map(p => ({
      name: p.provinceShortName,
      value: p.confirmedCount
    }));
    console.log(this.liveData, 'live-data');
      let province = null;
      return {
        visualMap: {
          show: true,
          type: "piecewise",
          min: 0,
          max: 2000,
          align: "right",
          top: province ? 0 : "40%",
          right: 0,
          left: province ? 0 : "auto",
          inRange: {
            color: ["#ffc0b1", "#ff8c71", "#ef1717", "#9c0505"]
          },
          pieces: [
            { min: 1000 },
            { min: 500, max: 999 },
            { min: 100, max: 499 },
            { min: 10, max: 99 },
            { min: 1, max: 9 }
          ],
          padding: 5,
          // "inverse": false,
          // "splitNumber": 5,
          orient: province ? "horizontal" : "vertical",
          showLabel: province ? false : true,
          text: ["高", "低"],
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 10
          }
          // "borderWidth": 0
        },
        series: [
          {
            left: "center",
            type: "map",
            name: "确诊人数",
            silent: province ? true : false,
            label: {
              show: true,
              position: "inside",
              fontSize: 6
            },
            mapType: province ? province.pinyin : "china",
            data,
            zoom: 1.2,
            roam: false,
            showLegendSymbol: false,
            emphasis: {},
            rippleEffect: {
              show: true,
              brushType: "stroke",
              scale: 2.5,
              period: 4
            }
          }
        ]
      };
    },
    async initData() {
      const options = await this.getOption();
      echarts.init(document.getElementById("map")).setOption(options);
    },
    initMapData() {}
  }
};
</script>
<style lang="css" scoped>
#map {
  height: 100vh;
}
</style>
