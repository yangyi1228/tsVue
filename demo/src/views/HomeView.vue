<template>
  <div class="home">
    <div class="common-layout">
      <el-container>
        <el-header>
          <el-row :gutter="20">
            <el-col :span="4">
              <img src="../assets/logo.png" class="logo">
            </el-col>
            <el-col :span="16">
              <h2>后台管理系统</h2>
            </el-col>
            <el-col :span="4">
              <span class="quit-login" @click="emit">退出登录</span>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
              :default-active="active" text-color="#fff" router>
              <el-menu-item v-for="item in list" :index="item.path" :key="item.path">
                <span>{{item.meta.title}}</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import {useRouter,useRoute} from 'vue-router' 
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const list = router.getRoutes().filter(v => v.meta.isShow)
    console.log(list);

    function emit(){
      localStorage.removeItem('token')
      router.push('/login')
    }
    
    return {list,active:route.path,emit}
  },
}
</script>

<style lang="scss" scoped>
.el-header {
  height: 80px;
  background-color: #666;

  .logo {
    height: 80px;
  }

  h2,
  .quit-login {
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: white;
  }
}
.el-aside{
  .el-menu{
    height: calc(100vh - 80px);
  }
}
</style>
