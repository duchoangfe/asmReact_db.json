import { Space, Table, Tag, Button, Input, Image, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { message } from 'antd';

const ProductManagementPage = (props) => {
  const removeProduct = (id) => {
    props.onRemove(id);
    message.success('Xóa Sản Phẩm Thành Công !');
  };

  const data = props.products.map((item) => {
    return {
      key: item.id,
      ...item,
    };
  });

  interface DataType {
    key: string;
    name: string;
    price: number;
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Giá Tiền',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <Popconfirm
            placement='top'
            title='Xóa ?'
            onConfirm={() => removeProduct(record.key)}
            okText='Yes'
            cancelText='No'
          >
            <Button type='primary'>Delete</Button>
          </Popconfirm>

          <Button type='primary'>
            <Link to={`/admin/products/${record.key}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductManagementPage;
