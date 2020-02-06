<template>
  <div id="chart">
    <div id="totality" :style="{ width: '40%', height: '50vh' }"></div>
    <div id="grow" :style="{ width: '40%', height: '50vh' }"></div>
  </div>
</template>
<script>
  import { getnCovData } from "../../public/service/getData";
  import * as _ from "lodash";
  export default {
  name: "Rate",
  async mounted() {
    this.drawLine1();
    this.drawLine2();
  },
  methods: {
    async drawLine1() {
      const nCovData = await getnCovData().then(data => data.data.filter(c => c.date.match(/\d\d\d\d-\d\d-\d\d/)));
      const nCovday = _.uniq(nCovData.map(c => c.date.substring(5))).splice(45);
      const nCovConfirmed = _.filter(nCovData, {province: '', country: '中国'}).map(c => c.confirmed).splice(45);
      const nCovSuspected = _.filter(nCovData, {province: '', country: '中国'}).map(c => c.suspected).splice(45);
      const nCovCured = _.filter(nCovData, {province: '', country: '中国'}).map(c => c.cured).splice(45);
      const nCovDead = _.filter(nCovData, {province: '', country: '中国'}).map(c => c.dead).splice(45);
      let myChart = this.$echarts.init(document.getElementById("totality"));
      myChart.setOption({
        backgroundColor: "#000",
        title: {
          text: `全国疫情趋势图`,
          subtext: "单位: 例",
          padding: 20,
          itemGap: 20,
          x: 20,
          y: 3,
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        legend: {
          orient: "horizontal",
          x: "right",
          padding: [0, 50, 0, 0],
          y: "50",
          textStyle: {
            color: "#fff"
          },
          data: ["确诊", "疑似", "治愈", "死亡"]
        },
        tooltip: {},
        grid: {
          top: "13%"
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          data: nCovday,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: "确诊",
            color: "red",
            symbol: "circle",
            symbolSize: 10,
            data: nCovConfirmed,
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            },
            smooth: false
          },
          {
            name: "疑似",
            color: "yellow",
            symbol: "circle",
            symbolSize: 10,
            data: nCovSuspected,
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            },
            smooth: false
          },
          {
            name: "治愈",
            color: "green",
            symbol: "circle",
            symbolSize: 10,
            data: nCovCured,
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            },
            smooth: false
          },
          {
            name: "死亡",
            color: "grey",
            symbol: "circle",
            symbolSize: 10,
            data: nCovDead,
            type: "line",
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              }
            },
            smooth: false
          }
        ]
      });
    },
    decrease(arr) {
      const b = [0];
      for(let i = 1; i < arr.length; i++) {
        b.push(arr[i] - arr[i-1]);
      }
      return b;
    },
   async drawLine2() {
        const nCovData = await getnCovData().then(data => data.data.filter(c => c.date.match(/\d\d\d\d-\d\d-\d\d/)));
        const nCovday = _.uniq(nCovData.map(c => c.date.substring(5))).splice(45);
        const nCovConfirmed = _.filter(nCovData, {province: '', country: '中国'}).map(c => c.confirmed).splice(45);
        const nCovConfirmedGrow = this.decrease(nCovConfirmed);
        const nCovSuspected = _.filter(nCovData, {province: '', country: '中国'}).map(c => c.suspected).splice(45);
        const nCovSuspectedGrow = this.decrease(nCovSuspected);
        let myChart = this.$echarts.init(document.getElementById('grow'))
        myChart.setOption({
              backgroundColor: '#000',
              title: { 
                  text: `全国疫情新增趋势图`,
                  subtext: '单位: 例',
                  padding: 20,
                  itemGap: 20,
                  x: 20,
                  y: 3,
                  textStyle: {
                      color: '#fff',
                      fontSize: 14,
                  }
              },
              legend: {
                  orient: 'horizontal',
                  x: 'right',
                  padding: [0, 50, 0, 0],
                  y: '50',
                  textStyle: {
                      color: '#fff',
                      margin: '0 5px 0 0'
                  },
                  data: ['新增确诊', '新增疑似']
              },
              grid: {
                  top: '13%',
              },
              tooltip: {},
              xAxis: {
                  type: 'category',
                  axisLine: {
                      lineStyle: {
                          color: '#999',
                      }
                  },
                  data: nCovday,
              },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    }
                },
                axisLine: {
                    show: false,
                  },
            },
            series: [{
                name: '新增确诊',
                color: 'red',
                symbol: 'circle',
                symbolSize: 10,
                data: nCovConfirmedGrow,
                type: 'line',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                        }
                    }
                },
                smooth: false,
            }, {
                name: '新增疑似',
                color: 'yellow',
                symbol: 'circle',
                symbolSize: 10,
                data: nCovSuspectedGrow,
                type: 'line',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                        }
                    }
                },
                smooth: false,
            }]
    })
    }
  }
}
</script>



<style scoped>
    #chart {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: url('../assets/red.png') no-repeat;
        background-size: cover;
    }
    #totality {
        border-left: 10px solid #10aaba;
        border-right: 20px solid #10aaba;
    }
    #grow {
        border-left: 10px solid #10aaba;
        border-right: 20px solid #10aaba;
    }
</style>
