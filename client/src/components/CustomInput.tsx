import { Col, Row } from 'antd';
import './styles/CustomInput.module.css';

interface Props {
  name: string;
  errors?: any;
  label: string;
  type?: string;
  register: any;
  required?: boolean;
  defaultValue?: any;
  placeholder?: string;
}

const CustomInput = ({
  name,
  errors = {},
  required = false,
  label,
  register,
  type = 'text',
  placeholder,
}: Props) => {
  return (
    <Row gutter={[16, 0]} align='middle' style={{marginBottom: '1.25rem'}}>
      <Col xs={{ span: 24 }} lg={{ span: 5 }}>
        <label htmlFor={name} className='label'>
          {label}
          {required && <span style={{color: '#ff4d4f', marginLeft: '0.25rem'}}>*</span>}
        </label>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 19 }}>
        <div style={{position: 'relative'}}>
          <input
            id={name}
            type={type}
            placeholder={placeholder || label}
            {...register(name, { required: required })}
            className={`input-field ${errors[name] ? 'input-field-error' : ''}`}
          />
          {errors[name] && (
            <span style={{
              fontSize: '0.875rem',
              color: '#ff4d4f',
              marginTop: '0.25rem',
              display: 'block',
              fontWeight: 500,
            }}>
              {errors[name]?.message || `${label} is required`}
            </span>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default CustomInput;
