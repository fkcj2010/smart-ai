<template>
    <div class="fs14">
        <div>
            <div class="chart-title">社区住户出行规律</div>
            <div class="chart-container" id='tripChart'></div>
        </div>
        <div>
            <div class="chart-title mt16">社区住户能源消费</div>
            <div class="chart-container" id='resourceChart'></div>
        </div>
        <div class="mt16">
            <el-input
                class="name-input"
                placeholder="请输入姓名"
                v-model="stateHome.person.name"
                clearable>
            </el-input>
            <el-button type="primary" @click="appraise">评估</el-button>
        </div>
        <div class="fs14">
            <el-row :span='24' class="item-row">
                <el-col :span='4'>该用户困难指数:</el-col>
                <el-col :span='2'>1</el-col>
                <el-col :span='10'>
                    <el-button type="mini" plain>社区帮助</el-button>
                </el-col>
            </el-row>
            <el-row :span='24' class="item-row">
                <el-col :span='4'>能源消费类别:</el-col>
                <el-col :span='2'>高消耗</el-col>
            </el-row>
            <el-row :span='24' class="item-row">
                <el-col :span='4'>危险指数:</el-col>
                <el-col :span='2' class="fs14">高</el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'CommunityTag',

    computed: mapState({
        stateHome: state => state.home
    }),

    data() {
        return {
            tripChartData: {
                dataAxis: [1,2,3,4,5],
                dataYaxis: [220, 182, 191, 234, 290],
            }
        }
    },

    mounted() {
        this.initTripChart()
    },

    methods: {
        initTripChart() {
            let tripChart = echarts.init(document.querySelector('#tripChart'));
            let resourceChart = echarts.init(document.querySelector('#resourceChart'));
            let option = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : this.tripChartData.dataAxis,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: '30%',
                        data:this.tripChartData.dataYaxis
                    }
                ]
            }
            tripChart.setOption(option)
            resourceChart.setOption(option)
        },

        appraise() {
            console.log(this.stateHome.person.name);
            
        }
    },
}
</script>
<style lang="less" scoped>
@borderWidth: 1px solid #eee;

    .chart-title{
        margin-bottom: 16px;
    }

    .chart-container{
        border: @borderWidth;
        width: 800px;
        height: 260px;
    }

    .name-input{
        width: 234px;
        margin-right: 16px;
    }

    .item-row{
        margin-top: 16px;
    }
</style>