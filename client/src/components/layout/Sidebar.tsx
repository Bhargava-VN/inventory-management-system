import {useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Button, Layout, Menu} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {sidebarItems} from '../../constant/sidebarItems';
import {useAppDispatch} from '../../redux/hooks';
import {logoutUser} from '../../redux/services/authSlice';

const {Content, Sider} = Layout;

const Sidebar = () => {
  const [showLogoutBtn, setShowLogoutBtn] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <Layout style={{height: '100vh'}}>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onCollapse={(collapsed, type) => {
          if (type === 'responsive') {
            setShowLogoutBtn(!collapsed);
          }
          if (type === 'clickTrigger') {
            setShowLogoutBtn(!collapsed);
          }
        }}
        width='260px'
        style={{
          background: 'linear-gradient(135deg, #164863 0%, #1a5276 100%)',
          position: 'relative',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{padding: '1.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
          <h1 style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            textAlign: 'center',
            margin: 0,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}>
            📦 Inventory
          </h1>
          <p style={{color: 'rgba(255,255,255,0.7)', textAlign: 'center', margin: '0.5rem 0 0 0', fontSize: '0.85rem'}}>
            Management System
          </p>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          style={{
            background: 'transparent',
            fontWeight: 600,
            border: 'none',
            marginTop: '1rem',
          }}
          defaultSelectedKeys={['Dashboard']}
          items={sidebarItems}
        />
        {showLogoutBtn && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              padding: '1.5rem',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.1))',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Button
              type='primary'
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #1890ff, #177ddc)',
                border: 'none',
                fontWeight: 600,
                height: '40px',
                fontSize: '14px',
              }}
              onClick={handleClick}
            >
              <LogoutOutlined style={{marginRight: '0.5rem'}} />
              Logout
            </Button>
          </div>
        )}
      </Sider>
      <Layout>
        <Content style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          backgroundAttachment: 'fixed',
          overflowY: 'auto',
        }}>
          <div
            style={{
              padding: '2rem',
              maxHeight: 'calc(100vh - 4rem)',
              minHeight: 'calc(100vh - 4rem)',
              background: '#fff',
              borderRadius: '12px',
              overflow: 'auto',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
