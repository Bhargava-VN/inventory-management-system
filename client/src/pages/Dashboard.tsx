import { Card, Col, Row } from 'antd';
import { ShoppingCartOutlined, ShoppingOutlined, DollarOutlined } from '@ant-design/icons';
import MonthlyChart from '../components/Charts/MonthlyChart';
import Loader from '../components/Loader';
import { useCountProductsQuery } from '../redux/features/management/productApi';
import { useYearlySaleQuery } from '../redux/features/management/saleApi';
import DailyChart from '../components/Charts/DailyChart';

const Dashboard = () => {
  const { data: products, isLoading } = useCountProductsQuery(undefined);
  const { data: yearlyData, isLoading: isLoading1 } = useYearlySaleQuery(undefined);

  if (isLoading && isLoading1) return <Loader />;

  const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <Card
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        borderColor: `${color}30`,
        border: `2px solid ${color}30`,
        borderRadius: '12px',
        height: '100%',
      }}
      hoverable
    >
      <div style={{textAlign: 'center'}}>
        <Icon style={{fontSize: '2.5rem', color: color, marginBottom: '1rem'}} />
        <h3 style={{color: '#2d3436', marginBottom: '0.5rem', fontWeight: 500}}>{title}</h3>
        <h1 style={{fontSize: '2rem', color: color, fontWeight: 700, margin: 0}}>
          {value}
        </h1>
      </div>
    </Card>
  );

  return (
    <>
      <Row gutter={[16, 16]} style={{marginBottom: '2rem'}}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
          <StatCard
            icon={ShoppingCartOutlined}
            title='Total Stock'
            value={products?.data?.totalQuantity || 0}
            color='#1890ff'
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
          <StatCard
            icon={ShoppingOutlined}
            title='Total Items Sold'
            value={
              yearlyData?.data.reduce(
                (acc: number, cur: { totalQuantity: number }) => (acc += cur.totalQuantity),
                0
              ) || 0
            }
            color='#52c41a'
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
          <StatCard
            icon={DollarOutlined}
            title='Total Revenue'
            value={`$${
              yearlyData?.data.reduce(
                (acc: number, cur: { totalRevenue: number }) => (acc += cur.totalRevenue),
                0
              ) || 0
            }`}
            color='#faad14'
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card
            title={
              <h2 style={{margin: 0, fontSize: '1.25rem', fontWeight: 700}}>
                📊 Daily Sales & Revenue
              </h2>
            }
            bordered={false}
            style={{borderRadius: '12px', height: '100%'}}
          >
            <DailyChart />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card
            title={
              <h2 style={{margin: 0, fontSize: '1.25rem', fontWeight: 700}}>
                📈 Monthly Revenue
              </h2>
            }
            bordered={false}
            style={{borderRadius: '12px', height: '100%'}}
          >
            <MonthlyChart />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
