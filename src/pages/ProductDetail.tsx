import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const ProductDetailPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.products.find((product) => product.id == id));
  }, [id, props.products]);

  return (
    <div
      style={{
        background: '#ECECEC',
        padding: '30px',
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card>
            <Meta title={product?.name} />
            <p style={{ marginTop: '16px', color: 'red' }}>{product?.price}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
