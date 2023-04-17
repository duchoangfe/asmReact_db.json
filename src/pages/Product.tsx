import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
  const { Meta } = Card;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {props.products.map((item) => (
          <Col span={6} key={item.id}>
            <Link to={`/products/${item.id}`}>
              <Card>
                <Meta title={item.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
