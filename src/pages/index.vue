<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="/aggList" :key="1">选项1</el-menu-item>
            <el-menu-item index="/map" :key="2">选项2</el-menu-item>
            <el-menu-item index="/hfive">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
        <el-main><router-view></router-view></el-main>
    </el-container>
  
  </div>
</template>

<script>
import { getToken } from "../tool/tool";

export default {
  data() {
    return {
      menuList: [],
    };
  },
  mounted() {
    const hadRefresh = sessionStorage.getItem("refresh");
    console.log(hadRefresh);
    if (!hadRefresh) {
      console.log("jjj");
      window.location.reload();
      sessionStorage.setItem("refresh", 1);
    }
    getToken(this);
    console.log(this);
    // localStorage.setItem('user_auth_id',this.$route.query.user_auth_id);//用于权限
    // console.log(this.$route.query.user_auth_id)
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #b3c0d1;
  color: #333;
  height: 100vh;
}
</style>


