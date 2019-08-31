// 创建一个app实例
App({
  // 小程序启动之后触发
	onLaunch: function () {

		// 展示本地存储能力(同步)
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)
		
		// 登录
		wx.login({
		success: res => {
			// 发送 res.code 到后台换取 openId, sessionKey, unionId
		}
		})
		// 获取用户信息
		wx.getSetting({
		success: res => {
			if (res.authSetting['scope.userInfo']) {
			// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
			wx.getUserInfo({
				success: res => {
				// 可以将 res 发送给后台解码出 unionId
				this.globalData.userInfo = res.userInfo

				// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
				// 所以此处加入 callback 以防止这种情况
				if (this.userInfoReadyCallback) {
					this.userInfoReadyCallback(res)
				}
				}
			})
			}
		}
		})
	},
	globalData: {
		userInfo: null,
		commonUrl: 'http://47.98.251.7:8888'
	},

	// 封装一个全局请求函数，导出一个promise对象
	request(path,data){
		return new Promise((reslove,reject) => {
			// 显示 loading提示框
			wx.showLoading({
				title: '加载中',
			})
			wx.request({
				url: 'http://47.98.251.7:8888' + path,
				method: 'POST',
				data,
				success: (res) => {
					reslove(res.data)
				},
				complete: () => {
					// 关闭loading提示框
					wx.hideLoading() 
				}
			})
		})
	}
})