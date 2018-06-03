import { formatDate } from './utils/date-util';

const Mock = require('mockjs')
const successData = function(d){
    let table = {data:null,columns:null}
    let row=[]
    let columns=[]
    for(let i=100;i<=160;i++){
        if(i==100){
            columns.push({field: 'nursingdate', title:'护理日期' ,width: 100,background:'#ff0000', titleAlign: 'center',columnAlign:'center',isFrozen: true})
        }else{
            columns.push({field: 'room'+i, title:i,width: 100, titleAlign: 'center',columnAlign:'center'})
        }
    }

    let cal = new Date('2018-01-01')
    for(let i=0;i<365;i++){
        let x = {};
        cal.setDate(cal.getDate() + 1);
        x.nursingdate=formatDate(cal,'yyyy-MM-dd')
        x.room101='-'
        x.room102='-'
        x.room103='-'
        x.room104='-'
        x.room105='-'
        x.room106='-'
        x.room107='-'
        x.room108='-'
        x.room109='-'
        x.room110='-'
        x.room111='-'
        x.room112='-'
        x.room113='-'
        x.room114='-'
        x.room115='-'
        x.room116='-'
        x.room117='-'
        x.room118='-'
        x.room119='-'
        x.room120='-'
        x.room121='-'
        x.room122='-'
        x.room123='-'
        x.room124='-'
        x.room125='-'
        x.room126='-'
        x.room127='-'
        x.room128='-'
        x.room129='-'
        x.room130='-'
        x.room131='-'
        x.room132='-'
        x.room133='-'
        x.room134='-'
        x.room135='-'
        x.room136='-'
        x.room137='-'
        x.room138='-'
        x.room139='-'
        x.room140='-'
        x.room141='-'
        x.room142='-'
        x.room143='-'
        x.room144='-'
        x.room145='-'
        x.room146='-'
        x.room147='-'
        x.room148='-'
        x.room149='-'
        x.room150='-'
        x.room151='-'
        x.room152='-'
        x.room153='-'
        x.room154='-'
        x.room155='-'
        x.room156='-'
        x.room157='-'
        x.room158='-'
        x.room159='-'
        x.room160='-'
        row.push(x);
    }

    table.data=row
    table.columns=columns
 return {status:1,object:table}
}
// Mock.setup({
//     timeout: '1000-2000'  
// });
Mock.mock('/api/data',successData)