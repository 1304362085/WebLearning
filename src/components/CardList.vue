<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="src" class="image">
    <div style="padding: 14px;">
      <span>{{ title }}-{{ price }}$</span>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "card",
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    getName () {
      console.log(this.title)
    }
  }
};
</script>
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
