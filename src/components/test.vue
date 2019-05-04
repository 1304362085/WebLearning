<template>
  <div>
    <div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" id="drinkPage" @click="getData('drink')">饮品</el-menu-item>
        <el-menu-item index="2" id="pastryPage" @click="getData('pastry')">糕点</el-menu-item>
        <el-menu-item id="mealPage" index="3" @click="getData('meal')">套餐</el-menu-item>
        <el-menu-item index="4">已点商品</el-menu-item>
      </el-menu>
    </div>
    <div id="showZone">
      <div v-html="products"></div>
      <div class="card">
        <img
          class="card-img-top vue2-preview"
          @click="$preview.open(index, list)"
          height="150px"
          width="150px"
          src="../../static/moka.jpg"
          alt
        >
        <div class="card-body">
          <h4 class="card-title">摩卡</h4>
          <p class="card-text">28</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      products: "<h1>good</h1>"
    };
  },
  methods: {
    getData: function(e) {
      console.log(e);
      if (e == null || e == "") {
        e = "default";
      }
      var json = [
        { moka: 28, Latte: 26, Capucino: 123 },
        { Tilamisu: 20, Cheese: 22 }
      ];

      for (var i = 0, l = json.length; i < l; i++) {
        for (var key in json[i]) {
          console.log(key + ":" + json[i][key]);
        }
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
</style>