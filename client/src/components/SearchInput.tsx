import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

interface SearchInputProps {
  setQuery: React.Dispatch<
    React.SetStateAction<{
      page: number;
      limit: number;
      search: string;
    }>
  >;
  placeholder?: string;
}

const SearchInput = ({ setQuery, placeholder = 'Search…' }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debounceId = setTimeout(() => {
      setQuery((prev) => ({ ...prev, search: searchTerm, page: 1 }));
    }, 500);

    return () => {
      clearTimeout(debounceId);
    };
  }, [searchTerm, setQuery]);

  return (
    <div>
      <Input
        size='large'
        style={{
          minWidth: '300px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        prefix={<SearchOutlined style={{color: '#1890ff', marginRight: '0.5rem'}} />}
        allowClear
      />
    </div>
  );
};

export default SearchInput;
