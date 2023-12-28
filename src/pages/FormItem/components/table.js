import { Table } from 'antd'
import { useEffect, useState } from 'react'

function TableList(props) {
    let [dataList, SetDataList] = useState([])
    const objText = {
        1: '未开始',
        2: '执行中',
        3: '已完成',
    }
    useEffect(() => {
        let arr = []
        for (let i = 0; i < 22; i++) {
            let item = {
                key: i,
                taskName: '测试任务' + i,
                taskStatus: '1',
            }
            arr.push(item)
        }
        SetDataList(arr)
    }, [])
    const colums = [
        { title: '任务名称', dataIndex: 'taskName', key: 'taskName' },
        {
            title: '任务状态',
            dataIndex: 'taskStatus',
            key: 'taskStatus',
            render: (e) => {
                return objText[e]
            },
        },
    ]
    const data = [{ taskName: '测试任务', taskStatus: '1', key: '1' }]
    const getTableList = (pageNo, pageSize) => {
        console.log(pageNo, pageSize)
    }
    return (
        <>
            <div>
                <Table
                    size="mini"
                    columns={colums}
                    dataSource={dataList}
                    pagination={{
                        size: 'small',
                        showQuickJumper: true,
                        defaultCurrent: 1,
                        showSizeChanger: true,
                        total: dataList.length,
                        onChange: (pageNo, pageSize) =>
                            getTableList(pageNo, pageSize),
                    }}
                ></Table>
            </div>
        </>
    )
}
export default TableList
