import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { message } from 'antd';
import { IProduct } from './../../types/product';

interface IProps {
  onAdd: (product: IProduct) => void;
}

const AddProductPage = (props: IProps) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    props.onAdd({ ...values });
    message.success('Thêm Sản Phẩm Thành Công !');
    navigate('/admin/products');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 1000, margin: '0 auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Tên Sản Phẩm'
          name='name'
          rules={[{ required: true, message: 'Vui Lòng Nhập Tên Sản Phẩm' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Giá Tiền'
          name='price'
          rules={[{ required: true, message: 'Vui Lòng Nhập Giá Tiền' }]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Thêm Sản Phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;
