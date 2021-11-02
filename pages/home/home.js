// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'codeRomantic',
        age:18,
        students:[
            {id:111,name:'a',age:18},
            {id:112,name:'b',age:20},
            {id:113,name:'c',age:25},
            {id:114,name:'d',age:38}
        ],
        counter:0
    },
    add(){
        // 1.错误做法：界面不会刷新
        // this.data.counter+=1
        // console.log(this.data.counter);
        this.setData({
            counter:this.data.counter + 1
        })
    },
    decrease(){
        this.setData({
            counter:this.data.counter - 1
        })
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