import { SpinnerIcon } from '@phosphor-icons/react';
import { Button, Card, Flex } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastMessage from '../../lib/toastMessage';
import { useRegisterMutation } from '../../redux/features/authApi';
import { useAppDispatch } from '../../redux/hooks';
import { loginUser } from '../../redux/services/authSlice';
import decodeToken from '../../utils/decodeToken';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userRegistration, { isLoading }] = useRegisterMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      if (data.password !== data.confirmPassword) {
        toastMessage({ icon: 'error', text: 'Password and confirm password must be same!' });
        return;
      }

      const res = await userRegistration(data).unwrap();

      if (res.statusCode === 201) {
        const user = decodeToken(res.data.token);
        dispatch(loginUser({ token: res.data.token, user }));
        navigate('/');
        toastMessage({ icon: 'success', text: res.message });
      }
    } catch (error: any) {
      const errMsg =
        error?.data?.errors?.[Object.keys(error?.data?.errors)[0]] || error.data.message;
      toastMessage({ icon: 'error', text: errMsg });
    }
  };

  const InputField = ({ 
    icon: Icon, 
    label, 
    name, 
    type = 'text', 
    placeholder,
    register: registerFn 
  }: any) => (
    <div style={{marginBottom: '1.5rem'}}>
      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2d3436'}}>
        {label}
      </label>
      <div style={{position: 'relative'}}>
        <Icon style={{
          position: 'absolute',
          left: '12px',
          top: '12px',
          color: '#1890ff',
          fontSize: '16px',
        }} />
        <input
          type={type}
          {...registerFn(name, { required: true })}
          placeholder={placeholder}
          className={`input-field ${errors[name] ? 'input-field-error' : ''}`}
          style={{paddingLeft: '36px'}}
        />
      </div>
    </div>
  );

  return (
    <Flex
      justify='center'
      align='center'
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '1rem',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '450px',
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
            🚀
          </div>
          <h1 style={{
            marginBottom: '0.5rem',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 700,
            color: '#2d3436',
          }}>
            Create Account
          </h1>
          <p style={{color: '#9ca3af', textAlign: 'center', margin: 0}}>
            Join us to manage your inventory
          </p>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            icon={UserOutlined}
            label='Full Name'
            name='name'
            placeholder='Enter your name'
            register={register}
          />

          <InputField
            icon={MailOutlined}
            label='Email Address'
            name='email'
            type='email'
            placeholder='Enter your email'
            register={register}
          />

          <InputField
            icon={LockOutlined}
            label='Password'
            name='password'
            type='password'
            placeholder='Create a password'
            register={register}
          />

          <InputField
            icon={LockOutlined}
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            placeholder='Confirm your password'
            register={register}
          />

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
            {isLoading ? ' Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div style={{textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid #e0e0e0'}}>
          <p style={{marginBottom: 0, color: '#2d3436'}}>
            Already have an account?{' '}
            <Link to='/login' style={{color: '#1890ff', fontWeight: 600, textDecoration: 'none'}}>
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </Flex>
  );
};

export default RegisterPage;
