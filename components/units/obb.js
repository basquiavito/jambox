import React, {useState} from 'react'
import Table from './table'

function Obb(props){
    const [ codes, setCodes]  = useState({
        obb: [
          {  
      f1:'9',f2:'',f3:'',f4:'',f5:'',f6:'',f7:'', f8:'',f9:'', f10:'', f11:'',f12:'',
      b1:'',b2:'',b3:'',b4:'',b5:'',b6:'',b7:'', b8:'',b9:'', b10:'', b11:'',b12:'',
      s1:'',s2:'',s3:'',s4:'',s5:'',s6:'',s7:'', s8:'',s9:'', s10:'', s11:'',s12:'',
     
       
          }
        ]
      });

return(
    <div className="tableContainer">
    {codes.obb.map(p => {
        return <Table f1={props.f1} f2={props.f2} f3={props.f3} f4={props.f4} f5={props.f5} f6={props.f6} f7={props.f7} f8={props.f8} f9={props.f9} f10={props.f10} f11={props.f11} f12={props.f12}
                      b1={props.b1} b2={props.b2} b3={props.b3} b4={props.b4} b5={props.b5} b6={props.b6}  b7={props.b7} b8={props.b8} b9={props.b9}  b10={props.b10} b11={props.b11} b12={props.b12}
                      s1={props.s1} s2={props.s2} s3={props.s3} s4={props.s4} s5={props.s5} s6={props.s6}  s7={props.s7} s8={props.s8} s9={props.s9}  s10={props.s10}  s11={props.s11}  s12={props.s12}  
                        />})}

                        
    </div>
)
    }
export default Obb