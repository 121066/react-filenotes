import { Table, Form } from "@hi-ui/hiui"
const data = [
    {
        id: 1,
        name: 'Tom',
        age: 28,
        email: 'tom@gmail.com'
    },
    // ...更多数据
];

const columns = [
    {
        title: 'Name',
        width: 150,
        dataKey: 'name'
    },
    {
        title: 'Age',
        width: 150,
        dataKey: 'age'
    },
    {
        title: 'Email',
        width: 200,
        dataKey: 'email'
    }
];
const TableForm = () => {


    // const [form] = Form.useForm();

    const rowSelection = {
        onSelect: (record, selected, selectedRows) => {
            // 当用户选择某一行时的回调
        },
        onSelectAll: (selected, selectedRows) => {
            // 当用户选择全部行时的回调
        }
    };

    const validate = () => {
        // 表单验证
        return form.validateFields().then(values => {
            console.log('表单数据:', values);
        }).catch(errorInfo => {
            console.log('验证未通过的表单错误信息:', errorInfo);
        });
    };
    const EditableRow = () => {
        return (
            <div></div>
        )
    }
    const EditableCell = () => {
        return (
            <div></div>
        )
    }
    return (
        <div>
            <Table
                rowKey="id"
                rowSelection={{ type: 'radio', ...rowSelection }}
                columns={columns}
                data={data}
                components={{
                    body: {
                        row: EditableRow,
                        cell: EditableCell,
                    },
                }}
            />
            {/* <button onClick={validate}>验证表单</button> */}
        </div>
    );

}
export default TableForm