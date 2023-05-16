<template>
  <page>
    <base-form :data="form" ref="form" @event="formEvent">
      <template #mySlot>
        <el-checkbox v-model="form.data.xxx">是否勾选</el-checkbox>

        <!-- <base-form :data="form2" ref="form2" v-if="form.data.xxx"></base-form> -->

        <!-- 写原生 -->
        <!-- 写到一个表单 -->

      </template>
    </base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      form: {
        span: true,
        list: [
          {
            type: "input",
            field: "_input",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            type: "input",
            field: "_input",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },


          { slot: "mySlot", field: "xxx", title: "", span: 24, labelWidth: "0px" },//labelWidth:"0px"

                    {
            type: "input",
            field: "_input1",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            type: "input",
            field: "_input2",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: {},
        // titleWidth: "160px",
      },
      // form2: {
      //   span: true,
      //   list: [
      //     {
      //       type: "input",
      //       field: "_input",
      //       title: "普通输入框",
      //       span: 12,
      //       rules: [
      //         { required: true, message: "请输入" },
      //         { validator: self.$validator.numberpoint },
      //       ],
      //     },
      //     {
      //       type: "input",
      //       field: "_input",
      //       title: "普通输入框",
      //       span: 12,
      //       rules: [
      //         { required: true, message: "请输入" },
      //         { validator: self.$validator.numberpoint },
      //       ],
      //     },


      //     // { slot: "mySlot", field: "xxx", title: "", },//labelWidth:"0px"
      //   ],
      //   data: {},
      //   // titleWidth: "160px",
      // },
    };
  },
  mounted() {
  },
  watch: {
      "form.data": {
        handler() { 
          if (this.form.data.xxx) {
            this._set(this.form, "_input1", { show: true });
            this._set(this.form, "_input2", { show: true });
          } else { 
            this._set(this.form, "_input1", { show: false });
            this._set(this.form, "_input2", { show: false });
          }
        },
        immediate: true,
        deep:true
      }
    },
  methods: {
 
    formEvent(e) {
      // console.log(e, "表单事件");
      // if (e.item.field == "_input_btn") {
      //   if ((e.name = "btn")) {
      //     console.log(this.form.data);
      //   }
      // }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
