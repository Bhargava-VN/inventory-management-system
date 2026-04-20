import { SpinnerIcon } from '@phosphor-icons/react';
import { Button, Card, Flex } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastMessage from '../../lib/toastMessage';
import { useLoginMutation } from '../../redux/features/authApi';
import { useAppDispatch } from '../../redux/hooks';
import { loginUser } from '../../redux/services/authSlice';
import decodeToken from '../../utils/decodeToken';

const LoginPage = () => {
  const [userLogin, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'test-visitor@gmail.com',
      password: 'pass123',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await userLogin(data).unwrap();

      if (res.statusCode === 200) {
        const user = decodeToken(res.data.token);
        dispatch(loginUser({ token: res.data.token, user }));
        navigate('/');
        toastMessage({ icon: 'success', text: 'Successfully Login!' });
      }
    } catch (error: any) {
      toastMessage({ icon: 'error', text: error.data.message });
    }
  };

  return (
    <Flex
      justify='center'
      align='center'
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Card
        style={{
          width: '420px',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          border: 'none',
        }}
      >
        <Flex vertical align='center' style={{marginBottom: '2rem'}}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
          }}>
            📦
          </div>
          <h1 style={{
            marginBottom: '0.5rem',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 700,
            color: '#2d3436',
          }}>
            Welcome Back
          </h1>
          <p style={{color: '#9ca3af', textAlign: 'center', margin: 0}}>
            Sign in to your inventory account
          </p>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{marginBottom: '1.5rem'}}>
            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2d3436'}}>
              Email Address
            </label>
            <div style={{position: 'relative'}}>
              <MailOutlined style={{
                position: 'absolute',
                left: '12px',
                top: '12px',
                color: '#1890ff',
                fontSize: '16px',
              }} />
              <input
                type='text'
                {...register('email', { required: true })}
                placeholder='Enter your email'
                className={`input-field ${errors['email'] ? 'input-field-error' : ''}`}
                style={{paddingLeft: '36px'}}
              />
            </div>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2d3436'}}>
              Password
            </label>
            <div style={{position: 'relative'}}>
              <LockOutlined style={{
                position: 'absolute',
                left: '12px',
                top: '12px',
                color: '#1890ff',
                fontSize: '16px',
              }} />
              <input
                type='password'
                placeholder='Enter your password'
                className={`input-field ${errors['password'] ? 'input-field-error' : ''}`}
                {...register('password', { required: true })}
                style={{paddingLeft: '36px'}}
              />
            </div>
          </div>

          <Button
            htmlType='submit'
            type='primary'
            disabled={isLoading}
            style={{
              width: '100%',
              height: '44px',
              fontSize: '16px',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              marginBottom: '1.5rem',
            }}
          >
            {isLoading && <SpinnerIcon className='spin' weight='bold' />}
            {isLoading ? ' Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div style={{textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid #e0e0e0'}}>
          <p style={{marginBottom: 0, color: '#2d3436'}}>
            Don't have an account?{' '}
            <Link to='/register' style={{color: '#1890ff', fontWeight: 600, textDecoration: 'none'}}>
              Create one
            </Link>
          </p>
        </div>
      </Card>
    </Flex>
  );
};

export default LoginPage;
