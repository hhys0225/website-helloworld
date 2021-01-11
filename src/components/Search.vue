<template>
  <!-- 此页面用来展示搜索主页（搜索框） -->
  <div>
    <div id="container">
      <!--logo开始-->
      <img src="static/images/logo.png" />
    </div>
    <!--      logo结束-->
    <!--      内层搜索框开始-->
    <div id="search_wrapper">
      <input
        type="text"
        id="searchInput"
        placeholder="请输入查询的内容"
        v-model="keyword"
        @keyup.enter="gneralQuery"
      />
      <input type="button" value="搜索" @click="gneralQuery" />

      <!--提示内容结束-->
    </div>
    <!--      内层搜索框结束-->
  </div>
</template>

<script>
//声明组件

import SearchPage from "./SearchPage";

export default {
  data() {
    return {
      keyword: "",
      apiKey: "GamSP387f51834194991fd1cecf21e1c417d3037a763a0d",
      num: 20,
      resultList: [],
    };
  },
  methods: {
    gneralQuery() {
      //判断搜索是否为空
      if (this.keyword.replace(/ /g, "") != "") {
        //跳转页面
        this.$router.push({
          path: "/SearchPage",
          query: { keyword: this.keyword.replace(/ /g, "") },
        });
      }
    },
  },
  components: {
    SearchPage,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

/*外部容器*/

#container {
  width: 960px;
  margin: 50px auto;
  position: relative;
}
/*logo图片*/
#container img {
  width: 300px;
  display: block;
  margin: 0 auto;
}
#search_wrapper {
  width: 637px;
  height: 38px;
  line-height: 38px;
  margin: 0 auto;
  position: relative;
  background: #0cc;
}
#search_wrapper #searchInput {
  width: 521px;
  height: 20px;
  padding: 8px 7px;
  border: 1px solid #ccc;
  display: block;
  float: left;
  font-size: 16px;
  outline: none;
}
#search_wrapper #searchInput:hover {
  border-color: #999;
}
#search_wrapper #searchInput:focus {
  background: #f3faff;
}

/*搜索按钮*/
#search_wrapper input[type="button"] {
  display: block;
  width: 100px;
  height: 38px;
  line-height: 38px;
  border: none;
  outline: none;
  background: #3385ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  float: left;
}
#search_wrapper input[type="button"]:hover {
  background: #2d76e3;
}
</style>
