import { Button, Input } from "antd"
import './index.scss'
import { useState } from "react"
import {UpOutlined,DownOutlined,CloseOutlined,PlusCircleOutlined} from '@ant-design/icons'
function CartList(props){
    const {children,setDownIcon} = props
    return <>
        <div className="card_list">
            <div className="card_title flex flex-row justify-between items-center">
                <div>高级搜索</div>
                <div className="card_close"><CloseOutlined onClick={()=>setDownIcon(false)}/></div>
            </div>
            {children}
        </div>
    </>
}
function ItemList(props){
    const {setAddList}=props
    return <>
        <div>
        <PlusCircleOutlined style={{color:'#1677ff',fontSize:'14px'}} />
        <Button type="link" onClick={()=>{}}>添加条件</Button>
        </div>
    </>
}
function Search(){
    const [downIcon,setDownIcon] =useState(false)
    const [addList,setAddList] = useState([{type:'add',text:'添加条件'}])
    return <>
        <div className="search">
            <div className="left"> 
            <Input placeholder="请输入"></Input>
            </div>
            <div className="right">
                <Button onClick={()=>setDownIcon((e)=>!e)} className="right_btn" type="default">高级搜索 {downIcon?<DownOutlined style={{ fontSize: '12px',  }}/>:<UpOutlined  style={{ fontSize: '12px',  }}/>} </Button>
               {downIcon&& <CartList setDownIcon={setDownIcon}>
                    <div className=" p-12 flex flex-col justify-between  h-full">
                        <div className="list ">
                          <ItemList setAddList={setAddList} addList={addList}></ItemList>
                        </div>
                        <div className=" self-end">
                            <Button type="plan"> 一键重置</Button>
                            <Button type="primary">搜索</Button>
                        </div>
                    </div>
                </CartList>}
            </div>
        </div>
    
    </>
}
export default Search