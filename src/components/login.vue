<template>
	<div>
		<!-- 登录表单 -->
		<el-form :model="login" status-icon :rules="rule" ref="login" class="box">
			<el-form-item prop="username">
				<el-input prefix-icon="el-icon-ump-yonghu" v-model="login.username" auto-complete="off" />
			</el-form-item>
			<el-form-item prop="password">
				<el-input prefix-icon="el-icon-ump-mima" type="password" v-model="login.password" auto-complete="off" />
			</el-form-item>
			<el-form-item>
				<el-checkbox class="check" v-model="checked">记住我</el-checkbox>
			</el-form-item>
			<el-form-item>
				<el-button class="btn" type="primary" @click="submitForm('login')">登录</el-button>
			</el-form-item>
		</el-form>
		<div>
			<p>
				<a href="#" class="tips">还没有账号？点我去注册</a>
			</p>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'login',
		data() {
			var checkUsername = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入用户名'));
				} else {
					callback();
				}
			};
			var checkPassword = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'))
				} else {
					callback();
				}
			};
			return {
				checked: false,
				token: '',
				login: {
					username: '',
					password: ''
				},
				rule: {
					username: [{
						validator: checkUsername,
						trigger: 'blue'
					}],
					password: [{
						validator: checkPassword,
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			submitForm(login) {
				this.$refs[login].validate((valid) => {
					if(valid) {
						//提交表单
						this.$http.post('http://127.0.0.1:8888/api/login.do', {
							username: this.login.username,
							password: this.login.password
						}).then(result => {
							console.log(result);
							if(result.bodyText === 'index') {
								this.$router.push({
									path: 'home'
								}) //跳转到home组件中
							} else {
								console.log('登陆失败');
								return false;
							}
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
		}
	}
</script>

<style>
  .div{
	  border:3px solid blue; 
  }
  *{
	  margin: 0;
  }
  .el-form{
	  height: 400px;
	  width: 600px;
	  position: abosolute;
	  left: 50%;
	  top: 50%;
	  border:1px solid red;
	  background: lightgoldenrodyellow;
  }
  
</style>