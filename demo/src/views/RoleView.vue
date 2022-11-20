<template>
    <div>
        <el-form class="demo-form-inline">
            <el-form-item>
                <el-button type="primary" @click="addRole">添加角色</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list" style="width: 100%">
            <el-table-column prop="roleId" label="id" width="180" />
            <el-table-column prop="roleName" label="角色名" width="180" />
            <el-table-column prop="authority" label="操作">
                <template #default="{ row }">
                    <el-button type="primary" @click="changeUser(row)">修改权限</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { InitData } from '../type/role'
import {RoleListInt} from '../type/user'
import { role } from '../request/api'
import { onMounted, reactive, toRefs } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
    setup() {
        const data = reactive(new InitData())
        const router = useRouter()

        onMounted(() => {
            role().then(res => {
                data.list = res.data
            })
        })

        function changeUser(row: RoleListInt) {
            router.push({
                name:'authority',
                params:{
                    id:row.roleId,
                    authority:row.authority?.join(',') as string
                }
            })
        }

        function addRole() {
            ElMessageBox.prompt('请输入角色名称', '添加', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            })
                .then(({ value }) => { //value表示在输入框填写的值
                    if (value) {
                        data.list.push({roleId: data.list.length + 1, roleName: value, authority:[]})
                    }
                    ElMessage({
                        type: 'success',
                        message: `${value}添加成功`,
                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '取消操作',
                    })
                })
        }

        return { ...toRefs(data), changeUser, addRole }
    }
}
</script>

<style lang="scss" scoped>

</style>