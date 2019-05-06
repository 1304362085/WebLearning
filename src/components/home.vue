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
        <el-menu-item index="5">信息反馈</el-menu-item>
      </el-menu>
    </div>
    <div id="showZone">
      <div v-html="products"></div>
      <div ref="show" class="products">
        <ul class="card-list">
          <li v-for="(item, i) in cardList" :key="i">
            <card-list
              :title="item.key"
              :price="item.value"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
          </li>
        </ul>
      </div>
      <div>
      <ul>
        <li v-for="(item, i) in message_array" :key="i">{{item}}</li>
      </ul>
      <input type="text" v-model="message">
      <button v-on:click="dealMessage">add</button>
      <button v-on:click="buildConnect">Connect</button>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
//import ChatComponent from "@/components/ChatComponent.vue";
export default {
  name: "home",
  components: {
    CardList
  },
  data() {
    return {
      products: "<h1>good</h1>",
      cardList: [],
      message_array: [],
      message: '',
    };
  },
  methods: {
     dealMessage: function () {
             this.message_array.push(this.message);
             this.message = '';
         }
    ,
    buildConnect: function(){

    }
    ,
    getData: function(e) {
      let that = this;
      console.log(e);
      if (e == null || e == "") {
        e = "default";
      }
      this.$http
        .post("/api/displayProducts.do", {
          param: e
        })
        .then(result => {
          console.log(result.bodyText);
          let json = result.bodyText;
          for (let i = 0, l = json.length; i < l; i++) {
            for (let key in json[i]) {
              console.log(key + ":" + json[i][key]);
              that.cardList.push({
                key,
                value: json[i][key]
              });
            }
          }
        });
    }
  }
};
</script>

<style scoped>
</style>