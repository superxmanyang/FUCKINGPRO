<template>
    <div style="width:400px;margin:50px auto">
        <el-form :model="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="登录名" prop="name">
                <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm2: {
                    name: '',
                    checkPass: ''
                }
            }
        },
        methods: {
            submitForm(formName) {
                let vm = this;
                if (vm.ruleForm2.name == '') {
                    vm.$message.error('请输入登录名');
                } else if (vm.ruleForm2.checkPass == '') {
                    vm.$message.error('请输入密码');
                } else {
                    vm.$http.post('/admin/login/loginHandle',vm.qs.stringify({username:vm.ruleForm2.name,password :vm.ruleForm2.checkPass}))
                    .then((res) => {
                    // console.log(res);
                        if (res.data.state == 0) {
                          vm.$message.error(res.data.msg);
                        } else {

                            /***登录成功之后将token=今日的时间(dd)存进浏览器
                                若token与原本存储的不相等，则判断过期
                                重新登录
                            ***/
                        //    alert(`123`)
                            localStorage.setItem('token',new Date().getDate());
                            localStorage.setItem('user_auth_id',res.data.user_auth_id);//用于权限
                            vm.$router.push('/index?user_auth_id='+res.data.user_auth_id+'');
                            // window.location.reload();
                            // setTimeout(function(){
                            //     vm.$router.push('/index')
                            // },1000);
                            // setTimeout(function(){
                            //    window.location.reload();
                            // },1000);
                        }
                    })
                    .catch(function(err){ console.log('err'+err) })
                }
            }
        }
    }
</script>