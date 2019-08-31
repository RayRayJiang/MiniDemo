
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		playIndex: null,
		videoList: [
			{title: "视频标题1", videoUrl: "https://apd-915087620bb0242d55e46ba2074c92ed.v.smtcdns.com/om.tc.qq.com/AMpcEqYkP97TEQTIeX0kpA3vIF2C3bgWZE58pzuDo3aI/uwMROfz2r57CIaQXGdGnC2deB3dMjwJ3j2-b08CjaiSNycAH/szg_61764667_50001_f0f4227e70c34e428547f82c5656b197.f622.mp4?sdtfrom=v1010&guid=f9c189098219e9a912f5b4a31b0f88a3&vkey=692DA6438D0C75C0C8C53AAB106C0F0A908F9251CF5854315AC9DE8EED2D52EFB3F40A3C105AB2D156EF444D735DDD656D4B800026F881752D0E7E2AB7D2A59D719F8521A94BCA646EFF85EB59C4BB3B2076C38CB04749EEAD442FE732A6FC0FC8A794B0B02475065E38D032E8E7E146AA04356A9CB18D39003050417DC048AE", videoImg: "/assets/images/shipin1.png"},
			{title: "视频标题2", videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", videoImg: "/assets/images/aftea4.jpg"},
			{title: "视频标题3", videoUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", videoImg: "/assets/images/shipin1.png"},
		]
	},

	videoPlay(e){
		// 被点击视频的下标
		const id = e.currentTarget.dataset.id
		// 若没有正在播放的视频
		if(!this.data.playIndex){
			this.setData({
				playIndex: id
			})
			// 播放被点击的视频
			const videoContext = wx.createVideoContext(id + "index")
			videoContext.play()
		}else{
			// 关闭正在播放的视频，并将进度归0s
			const videoContextPrev = wx.createVideoContext(this.data.playIndex + "index")
			videoContextPrev.seek(0)
			videoContextPrev.stop()
			// 获取被点击视频的下标
			this.setData({
				playIndex: id
			})
			setTimeout(() => {
				//播放被点击的视频
				const videoContextCurrent = wx.createVideoContext(this.data.playIndex + "index")
				videoContextCurrent.play()
			}, 500)
		}

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})