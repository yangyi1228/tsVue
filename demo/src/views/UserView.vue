<template>
    <div>
        <el-form :inline="true" :model="selectData" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="selectData.nickName" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="selectData.roleId" class="m-2" placeholder="请选择" size="large">
                    <el-option label="全部" :value="0"></el-option>
                    <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName"
                        :value="item.roleId" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list" style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="nickName" label="姓名" width="180" />
            <el-table-column prop="role" label="角色">
                <template #default="{ row }">
                    <el-button link v-if="row.role.roleId===1">管理员</el-button>
                    <el-button link v-else-if="row.role.roleId===2">普通用户</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="role" label="操作">
                <template #default="{ row }">
                    <el-button link type="primary" @click="changeUser(row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="isShow" title="编辑信息">
            <el-form :model="active">
                <el-form-item label="姓名" label-width="50px">
                    <el-input v-model="active.nickName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="角色" label-width="50px">
                    <el-select v-model="active.role" placeholder="请选择角色">
                        <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName"
                            :value="item.roleId" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="updateUser">修改</el-button>
                    <el-button type="primary" @click="isShow = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import { role, nick } from '../request/api'
import { InitData, IUserList } from '../type/user'

export default {
    setup() {
        const data = reactive(new InitData())
        // 复制一份数据
        let copyList: IUserList[] = reactive([])

        onMounted(() => {
            getRole()
            getNick()
        })

        const getRole = async () => {
            const reqult = await role()
            data.roleList = reqult.data
        }
        const getNick = async () => {
            const reqult = await nick()
            copyList = reqult.data
            data.list = reqult.data
        }

        function onSubmit() {
            console.log(data.selectData.roleId);

            let arr: IUserList[] = []  //定义数组，用来接收查询过后要展示的数据
            // 每次查询的时候重置data.list
            data.list = copyList
            if (data.selectData.roleId || data.selectData.nickName) {  //判断两个是否其中一个有值
                if (data.selectData.roleId) {
                    arr = data.list.filter((value) => {  //将我们过滤出来的数据赋值给arr
                        return value.role.roleId === data.selectData.roleId
                    })
                }
                if (data.selectData.nickName) {
                    arr = data.list.filter((value) => {  //将我们过滤出来的数据赋值给arr
                        return value.nickName.indexOf(data.selectData.nickName) !== -1
                    })
                }
            } else {
                return
            }
            data.list = arr
        }

        //重置按钮
        function reset() {
            data.list = copyList
            data.selectData = {
                nickName: '',
                roleId: 0
            }
        }

        function changeUser(row: IUserList) {
            data.isShow = true
            data.active = {
                ...row,
                role: row.role.roleId
            }
        }

        function updateUser() {
            const obj: any = data.list.find((item) => { return item.id === data.active.id })
            obj.userName,obj.nickName = data.active.nickName
            obj.role = {roleId:data.active.role}
            data.list.forEach((item) => {
                if (item.id === data.active.id) {
                    item = obj
                }
            })
            data.isShow = false
        }

        return { ...toRefs(data), reset, onSubmit, changeUser, updateUser }
    }
}
</script>

<style lang="scss" scoped>

</style>