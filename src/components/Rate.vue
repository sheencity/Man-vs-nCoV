<template>
  <div id="chart">
    <div id="totality" :style="{ width: '1200px', height: '800px' }"></div>
    <div id="grow" :style="{ width: '1200px', height: '800px' }"></div>
  </div>
</template>
<script>
export default {
  name: "Rate",
  mounted() {
    this.drawLine1();
    this.drawLine2();
  },
  methods: {
    drawLine1() {
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
          x: "850",
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
          data: [
            "1.1",
            "1.2",
            "1.3",
            "1.4",
            "1.5",
            "1.6",
            "1.7",
            "1.8",
            "1.9",
            "1.10",
            "1.11",
            "1.12",
            "1.13",
            "1.14",
            "1.15",
            "1.16"
          ]
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
            data: [
              100,
              156,
              965,
              1655,
              1963,
              2365,
              3649,
              4963,
              5361,
              6135,
              7236,
              8632,
              9631,
              11236,
              12365,
              13654
            ],
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
            data: [
              123,
              196,
              1230,
              1955,
              2963,
              3665,
              4849,
              5963,
              6361,
              6935,
              7136,
              7632,
              8631,
              9236,
              11365,
              12354
            ],
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
            data: [
              10,
              15,
              65,
              136,
              163,
              236,
              364,
              496,
              536,
              613,
              723,
              863,
              963,
              1123,
              1236,
              1365
            ],
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
            data: [
              1,
              5,
              9,
              16,
              19,
              23,
              36,
              49,
              53,
              61,
              72,
              86,
              96,
              112,
              123,
              136
            ],
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

    drawLine2() {
      let myChart = this.$echarts.init(document.getElementById("grow"));
      myChart.setOption({
        backgroundColor: "#000",
        title: {
          text: `全国疫情新增趋势图`,
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
          x: "950",
          y: "50",
          textStyle: {
            color: "#fff",
            margin: "0 5px 0 0"
          },
          data: ["新增确诊", "新增疑似"]
        },
        grid: {
          top: "13%"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          data: [
            "1.1",
            "1.2",
            "1.3",
            "1.4",
            "1.5",
            "1.6",
            "1.7",
            "1.8",
            "1.9",
            "1.10",
            "1.11",
            "1.12",
            "1.13",
            "1.14",
            "1.15",
            "1.16"
          ]
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
            name: "新增确诊",
            color: "red",
            symbol: "circle",
            symbolSize: 10,
            data: [
              0,
              56,
              65,
              155,
              63,
              236,
              49,
              463,
              361,
              135,
              236,
              863,
              631,
              119,
              365,
              654
            ],
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
            name: "新增疑似",
            color: "yellow",
            symbol: "circle",
            symbolSize: 10,
            data: [
              0,
              5,
              53,
              41,
              36,
              23,
              61,
              39,
              61,
              35,
              36,
              63,
              31,
              36,
              65,
              54
            ],
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
    }
  }
};
</script>

<style scoped>
#chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/red.png") no-repeat;
  background-size: cover;
}
#totality {
  margin-top: 50px;
  border-left: 10px solid #10aaba;
  border-right: 10px solid #10aaba;
}
#grow {
  margin-top: 50px;
  border-left: 10px solid #10aaba;
  border-right: 10px solid #10aaba;
}
</style>
