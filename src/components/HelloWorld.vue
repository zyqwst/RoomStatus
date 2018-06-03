<template>
    <div style="width:80vw;overflow:hidden">
        <v-table
             :columns="tableData.columns"
             :table-data="tableData.data"
             is-vertical-resize
             loading-content
             width=1280
             even-bg-color="#f4f4f4"
             row-hover-color="#eee"
             row-click-color="#edf7ff"
             :row-click="rowClick"
             :column-cell-class-name="columnCellClass"
        ></v-table>
    </div>
</template>

<script>
    
import {VTable} from 'vue-easytable'
    export default{
        components:{VTable},
        data(){
            return {
                 tableData: {},
                 tablePage:{}
            }
        },
        mounted(){
          this.api()
        },
        methods:{
         columnCellClass(rowIndex,columnName,rowData){
                
                // 给三行column为‘hobby’的列设置className
                if (rowIndex === 1 && columnName==='room106'){

                    return 'column-cell-class-name-test';
                }

                // 给第二行设置className
                if (rowIndex ===1){

                    return 'column-cell-class-name-test2';
                }

                // 给姓名为‘周伟’的行设置className
                if (rowData.name === '周伟'){

                    return 'column-cell-class-name-test';
                }
            },
          rowClick(rowIndex,rowData,column){
            console.info(rowIndex,rowData.nursingdate,column.field)
          },
          api(){
              let _this = this
              this.$api.get('/api/data',{})
              .then(function(data){
                _this.tableData = data.object
              })
              .catch(function(error){
                console.info('网络请求出错',error)
              })
          }
        }
    }
</script>

<style>
@import 'vue-easytable/libs/themes-base/index.css';
.column-cell-class-name-test{
        background-color: #187;
    }
    .column-cell-class-name-test .v-table-body-cell{
        border-color: #187;
    }
</style>
