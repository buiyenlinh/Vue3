<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const lineChart = computed(() => {
       return { 
        options: {
          chart: {
            type: 'line',
            id: 'chart-lineChart'
          },
          xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999, 2001, 2005]
          }
        },
        series: [{
          name: 'sales',
          data: [30,40,35,50,49,60,70,91,125, 110, 140]
        }]
      }
    })

    const donutChart = computed(() => {
      return {
        options: {
          chart: {
            type: 'donut'
          }
        },
        series: [44, 55, 41, 17, 15]
      }
    })
    return {
      lineChart,
      donutChart
    }
  }
})
</script>


<template>
  <div>
    <h2>This is admin page</h2>
    <p>I am study apex chart</p>

    <el-row :gutter="30">
      <el-col :md="12">
        <apexchart
          width="500"
          :type="lineChart?.options?.chart?.type"
          :options="lineChart.options"
          :series="lineChart?.series"
        ></apexchart>
      </el-col>

      <el-col :md="12">
        <apexchart
          width="500"
          type="bar"
          :options="lineChart.options"
          :series="lineChart?.series"
        ></apexchart>
      </el-col>

      <el-col :md="12">
        <apexchart
          width="400px"
          :type="donutChart?.option?.chart?.type"
          :options="donutChart?.options"
          :series="donutChart?.series"
        ></apexchart>
      </el-col>

      <el-col :md="12">
        <div class="box">I am here</div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  animation-name: useBox;
  animation-duration: 4s;
  position: relative;
  animation-iteration-count: infinite;
  color: #fff;
}

@keyframes useBox {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 200px;
    top: 0;
  }
  50% {
    background-color: green;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: blue;
    left: 0;
    top: 200px;
  }
  100% {background-color:red; left:0px; top:0px;}

  
}
</style>