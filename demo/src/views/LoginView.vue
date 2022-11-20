<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号：" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off" /> 
      </el-form-item>
      <el-form-item label="密码：" prop="userPass">
        <el-input v-model="ruleForm.userPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button class="btn" @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs,ref } from '@vue/reactivity';
import {LoginData} from '../type/login'
import type { FormInstance } from 'element-plus'
import {login} from '../request/api'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const data = reactive(new LoginData())
    const rules = {
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 6, message: '账号长度为3-6位字符', trigger: 'blur' },
        ],
        userPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度为6-16位字符', trigger: 'blur' },
        ],
    }
    const ruleFormRef = ref<FormInstance>()
    //登录
    const submitForm = (formEl:FormInstance|undefined) => {
      if(!formEl) return
      //验证表单
      formEl.validate((valid)=>{
        if(valid){
          login(data.ruleForm).then((res)=>{
            console.log(res.token)
            localStorage.setItem('token',res.token)
            router.push('/home')
          }).catch(error=>{
            console.log(error);
          })
        }
      })
    }
    //重置
    const resetForm = (formEl:FormInstance|undefined) => {
      if(!formEl) return
      formEl.resetFields()
    }

    return { ...toRefs(data), rules, resetForm, ruleFormRef,submitForm}
  },
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url('../assets/login.jpg') no-repeat;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  position: relative;

  h2{
    margin-bottom: 20px;
    color: rgb(18, 47, 153);
  }
  .demo-ruleForm {
    width: 500px;
    background-color: #fff;
    padding: 40px;
    border-radius: 40px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .btn{
      width:100px;
      margin: 0 30px;      
    }
  }
}
</style>
