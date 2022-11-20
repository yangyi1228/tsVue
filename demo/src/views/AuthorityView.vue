<template>
    <div>
        <el-tree ref="treeRef" :data="list" show-checkbox :check-strictly="true" :default-checked-keys="authority" node-key="id"  :props="{label:'name'}" />
        <el-button @click="changeAuthority">更改</el-button>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { InitData } from '@/type/authority';
import { authority } from '@/request/api'
export default {
    setup() {
        const router = useRoute()
        const params: any = router.params
        const arr = params.authority.split(',').map(Number)
        const data = reactive(new InitData(parseInt(params.id), arr))
        authority().then(res => {
            console.log(res);
            data.list = res.data
        })

        function changeAuthority(){
            console.log(data.treeRef.getCheckedKeys());
            
        }

        return { ...toRefs(data),changeAuthority }
    }
}
</script>

<style lang="scss" scoped>

</style>