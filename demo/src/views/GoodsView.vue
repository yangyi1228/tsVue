<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="标题">
                    <el-input v-model="selectData.title" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item label="详情">
                    <el-input v-model="selectData.introduce" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                    <el-button type="primary" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="dataList.comList" style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="introduce" label="详情" />
        </el-table>
        <el-pagination @size-change="sizeChange" @current-change="currentChange" :page-size="selectData.pageSize" layout="prev, pager, next"
            :total="selectData.count" />
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, computed } from 'vue'
import { commodityList } from '../request/api'
import { InitData,IListInt } from '../type/goods'
export default {
    setup() {
        const data = reactive(new InitData())
        // 复制一份数据
        let copyList:IListInt[] = reactive([])

        // 获取数据
        commodityList().then(res => {
            data.list = res.data
            copyList = res.data
            data.selectData.count = res.data.length
        }).catch(error => {
            console.log(error);
        })

        function onSubmit() {
            let arr:IListInt[] = []  //定义数组，用来接收查询过后要展示的数据
            // 每次查询的时候重置data.list
            data.list = copyList
            if(data.selectData.title || data.selectData.introduce){  //判断两个是否其中一个有值
                if(data.selectData.title){
                    arr = data.list.filter((value)=>{  //将我们过滤出来的数据赋值给arr
                        return value.title.indexOf(data.selectData.title) !== -1
                    })
                }
                if(data.selectData.introduce){
                    arr = data.list.filter((value)=>{  //将我们过滤出来的数据赋值给arr
                        return value.introduce.indexOf(data.selectData.introduce) !== -1
                    })
                }
            }else{
                return
            }
            data.selectData.count = arr.length
            data.list = arr
        }
        //重置按钮
        function reset(){
            data.list = copyList
            data.selectData.count = copyList.length
        }

        //拆分数组（页码改变时更新数据）
        const dataList = reactive({
            comList: computed(() => {
                return data.list.slice((data.selectData.page - 1) * data.selectData.pageSize, data.selectData.page * data.selectData.pageSize)
            })
        })

        // 每页条数改变时触发
        const sizeChange = (pageSize: number) => {
            data.selectData.pageSize = pageSize
        }
        // 页码改变时触发
        const currentChange = (page: number) => {
            data.selectData.page = page
        }

        return { ...toRefs(data), onSubmit, sizeChange, currentChange, dataList,reset }
    }
}
</script>

<style lang="scss" scoped>

</style>