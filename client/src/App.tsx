import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            colorPrimary: '#1890ff',
            colorSuccess: '#52c41a',
            colorWarning: '#faad14',
            colorError: '#ff4d4f',
            colorInfo: '#1890ff',
            borderRadius: 8,
            fontSize: 14,
            lineHeight: 1.6,
            colorBgBase: '#ffffff',
            colorTextBase: '#2d3436',
            colorBorder: '#e0e0e0',
            colorBgLayout: '#f5f7fa',
            colorBgContainer: '#ffffff',
            colorBgElevated: '#fafbfc',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)',
            fontSizeHeading1: 32,
            fontSizeHeading2: 28,
            fontSizeHeading3: 24,
            fontSizeHeading4: 20,
            fontSizeHeading5: 16,
          },
          components: {
            Button: {
              primaryColor: '#1890ff',
              controlHeight: 40,
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
            },
            Input: {
              controlHeight: 40,
              borderRadius: 8,
              fontSize: 14,
              colorBorder: '#e0e0e0',
              controlPaddingHorizontal: 12,
              colorTextPlaceholder: '#9ca3af',
            },
            Select: {
              controlHeight: 40,
              borderRadius: 8,
              fontSize: 14,
            },
            Card: {
              colorBgContainer: '#ffffff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)',
              borderRadiusLG: 8,
              boxShadowSecondary: '0 8px 16px rgba(0, 0, 0, 0.1)',
            },
            Table: {
              headerBg: '#f5f7fa',
              headerColor: '#2d3436',
              headerBorderRadius: 8,
              colorBgContainer: '#ffffff',
              borderColor: '#e0e0e0',
              rowHoverBg: '#f5f7fa',
            },
            Menu: {
              colorBgBase: '#164863',
              colorItemBg: '#164863',
              colorItemBgHover: 'rgba(24, 144, 255, 0.15)',
              colorItemBgSelectedHorizontal: 'rgba(24, 144, 255, 0.2)',
            },
            Layout: {
              headerBg: '#164863',
              headerHeight: 64,
              headerPadding: '0 24px',
              headerColor: '#ffffff',
            },
            Modal: {
              contentBg: '#ffffff',
              titleFontSize: 18,
            },
            Form: {
              labelFontSize: 14,
              labelColor: '#2d3436',
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
};

export default App;
