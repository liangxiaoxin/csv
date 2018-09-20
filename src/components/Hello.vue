<template>
  <div class="csv-container">
    <div class="demo1">
      <h3>第一步：把要生成的数据转义成csv格式数据(header: ["id","number","string","smile"])</h3>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入数据"
        v-model="textarea"
        style="width: 500px"
      >
      </el-input>
      <el-button :plain="true" type="info" @click="change">点击转换</el-button>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="生成的数据"
        v-model="resultTextarea"
        style="width: 500px"
      >
      </el-input>
      <div>
        <h3>第二步：触发客户端生成csv文件并自行下载</h3>
        <el-button :plain="true" type="info" @click="downloadCsv">点击下载</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import CSV from 'comma-separated-values'
  import exportCsv from '@/utils/export-csv'

export default {

  name: 'hello',
  data () {
    return {
      textarea: '[["11","1111","ssd","嘿嘿"],["22","2222","kk","哈哈"],["33","3333","sf","呵呵"]]',
      resultTextarea:'',
    }
  },
  methods: {
    change () {
        let data = JSON.parse(this.textarea);
      this.resultTextarea = new CSV(data, { header: ["id","number","string","smile"] }).encode();
      console.log(this.resultTextarea);
    },
    downloadCsv () {
        if (this.resultTextarea=="") {
          this.$message({
            type: 'warning',
            message: '生成的csv数据不能为空',
          });
          return
        }
      exportCsv.download('1.csv',this.resultTextarea);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
