<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // watch: {
  //       // socket
  //       "$store.state.user.userInfo.id": {
  //         handler(newVal, oldVal) {
  //           if (newVal.length > 0) {
  //             //存在
  //             // console.log("1111111111111")
  //             this.$socket.io.opts.query = {
  //               token: 123, //localStorage.getItem("token") || '没有token'
  //             };
  //             this.$socket.open();
  //           } else {
  //             this.$socket.disconnect(); //中断socket连接
  //           }
  //         },
  //         immediate: true,
  //       },
  // },
  watch: {
            "$store.state.user.userInfo.id": {
          handler(newVal, oldVal) {
            if (newVal && newVal.length > 0) {
              //存在
              // console.log("1111111111111")
              this.$socket.io.opts.query = {
                token: 123, //localStorage.getItem("token") || '没有token'
              };
              this.$socket.open();
            } else {
              this.$socket.disconnect(); //中断socket连接
            }
          },
          immediate: true,
        },
    // $route: {
    //   //保存上一次的路由,之所以放在这里 是保证已经进了路由了
    //   handler(newVal, oldVal) {
    //     if (oldVal) {
    //       this.$store.commit("router/preRoute_fn", oldVal);
    //     }
    //   },
    //   immediate: true,
    // },
  },
  created() {
    // this.favicon();
  },
  sockets: {
    //内置事件
    //1 连接成功
    connect() {
      console.log("连接成功", this.$socket);
    },
    //2 断开连接
    disconnect(data) {
      console.log("连接断开", this.$socket);
    },
    //3 重连中...... 服务器端断开,客户端自动执行
    reconnecting() {
      console.log("重连中......");
    },
    //4 重连成功 // 服务器端断开重连成功,客户端自动执行
    reconnect() {
      console.log("重连成功");
    },

    //自定义///////////////////////////////////////////////
    /* 有新消息*/
    newInfo(data) {
      // console.log(data, "newInfo");
      this.$message.success(data);
    },
    /* 非法链接断开*/
    illegal(data) {
      /* this.$socket.disconnect(); //中断socket连接
      this.$socket.connect(); //重新socket连接 */
    },
  },
  mounted() {
    this.$store.commit("config/windowResize");
    window.addEventListener("resize", this.clientXY);
  },
  methods: {
    clientXY() {
      this.$store.commit("config/windowResize");
    },
    favicon() {
      var link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";

      link.href = require("@/assets/imgs/mxh.png");
      document.getElementsByTagName("head")[0].appendChild(link);
    },
  },
};
</script>

<style lang="scss">
</style>
