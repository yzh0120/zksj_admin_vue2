<template>
  <div>
    <el-row >
    
    <el-col :span="row.a">
      <el-form-item :prop="province" :rules="{ required: required, message: '此项不能为空', trigger: 'change' }" label-width="0px" class="city_slot">
        <el-select :disabled="disabled" v-model.trim="item[province]" placeholder="选择省"
          @change="() => { getCitys(item[province]); item[city] = ''; item[areas] = ''; }" :loading="loading"
          filterable>
          <el-option v-for="(key) in division" :value="key.areaCode" :key="key.areaCode" :label="key.areaName">
          </el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="row.b">
      <el-form-item :prop="city" :rules="{ required: required, message: '此项不能为空', trigger: 'change' }"  label-width="0px" class="city_slot">
        <el-select :disabled="disabled" v-model.trim="item[city]" placeholder="选择市"
          v-on:change="() => { getAreas(item[city]); item[areas] = ''; }" :loading="loading" filterable>
          <el-option v-for="(key) in cityArr" :value="key.areaCode" :key="key.areaCode" :label="key.areaName">
          </el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="row.c"  v-if="!onlyTwo">
      <el-form-item :prop="areas" :rules="{required:required,message:'此项不能为空',trigger:'change'}"  label-width="0px" class="city_slot">
        <el-select v-model.trim="item[areas]" placeholder="选择区" @change="areaChange" :loading="loading">
          <!-- <el-option v-for="key in areaArr" :value="key.value" :key="key.value" :label="key.text"></el-option> -->
          <el-option v-for="key in areaArr" :value="key.areaCode" :key="key.areaCode" :label="key.areaName"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="row.d" v-if="!onlyTwo">
      <el-form-item :prop="adress" :rules="{ required: addressRequired, message: '此项不能为空', trigger: 'blur' }"  label-width="0px" class="city_slot"
        v-if="adress">
        <el-input :disabled="disabled" v-model.trim="item[adress]" placeholder="请填写具体地址,如街道门牌号"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import * as testApi from "@/api/test.js";
export default {
  // props: ["item", "province", "city", "areas", "adress"],
  props: {
    onlyTwo: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => { },
    },
    province: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    areas: {
      type: String,
      default: "",
    },
    adress: {
      type: String,
      default: "",
    },
    required: {
      type: [Boolean, String],
      default: false,
    },
    addressRequired: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      division: [],
      cityArr: [],
      areaArr: [],
      loading: false,
    };
  },
  created() {
    this.$watch(
      function () {
        return this.item[this.city];
      },
      {
        handler(v) {
          if (v) {
            this.getCitys(this.item[this.province]);
          }
        },
        immediate: true,
      }
    );
    this.$watch(
      function () {
        return this.item[this.areas];
      },
      {
        handler(v) {
          // console.log(v, "vvvv");
          if (v) {
            this.getAreas(this.item[this.city]);
          }
        },
        immediate: true,
      }
    );
  },
  computed: {
    row() {
      if (this.onlyTwo) {
        return {
          a: 12,
          b: 10
        }
      }  else {
        return {
          a: 4,
          b: 4,
          c: 4,
          d: 10,
        }
      }
    },
  },
  mounted() {
    this.getTree();

    // if (this.item[this.city]) {
    //   this.getCitys(this.item[this.province]);
    // }
    // if (this.item[this.areas]) {
    //   this.getAreas(this.item[this.city]);
    // }
  },
  methods: {
    areaChange() {
      this.$forceUpdate();
    },
    getTree() {
      this.loading = true;
      testApi.getTree({ parentId: "" }).then((res) => {
        this.loading = false;
        this.division = res.data;
      });
    },
    async getCitys(province) {
      this.loading = true;
      if (province) {
        let res = await testApi.getTree({
          parentId: province,
        });
        this.cityArr = res.data;
      } else {
        this.cityArr = [];
      }
      this.loading = false;
    },
    async getAreas(province) {
      this.loading = true;
      if (province) {
        let res = await testApi.getTree({
          parentId: province,
        });
        this.areaArr = res.data;
      } else {
        this.areaArr = [];
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>

::v-deep{
  .el-col {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>


<style lang="scss"> 
.city_slot.el-form-item{
  margin-bottom:0px;
}
</style>
