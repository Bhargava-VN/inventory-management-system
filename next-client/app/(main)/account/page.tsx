import { Pencil, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
// import Loader from '../components/Loader';
// import { useGetSelfProfileQuery } from '../redux/features/authApi';
// import { profileKeys } from '../constant/profile';

const profileKeys = [
  { keyName: 'name' },
  { keyName: 'email' },
  { keyName: 'title' },
  { keyName: 'description' },
  { keyName: 'status' },
  { keyName: 'address' },
  { keyName: 'phone' },
  { keyName: 'city' },
  { keyName: 'country' },
  { keyName: 'facebook' },
  { keyName: 'twitter' },
  { keyName: 'linkedin' },
  { keyName: 'instagram' },
];

const ProfilePage = () => {
  // const { data, isLoading } = useGetSelfProfileQuery(undefined);

  // if (isLoading) return <Loader />;
  const data: any = {
    data: {
      name: 'John Doe',
      email: '',
      avatar: '',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    },
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center w-full'>
        <div className='w-62.5 h-62.5 border-2 border-gray-400 p-2 rounded-full'>
          <Image
            src={'/user.png'}
            alt='user'
            className='w-full h-full object-cover rounded-full'
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center my-4'>
        <div className='flex gap-4 flex-wrap justify-center'>
          <Link href='/edit-profile'>
            <Button className='gap-2'>
              <Pencil className='h-4 w-4' />
              Edit Profile
            </Button>
          </Link>
          <Link href='/change-password'>
            <Button variant='outline' className='gap-2'>
              <KeyRound className='h-4 w-4' />
              Change Password
            </Button>
          </Link>
        </div>
      </div>

      {/* Profile Info Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        {/* Empty left column for spacing */}
        <div className='lg:col-span-2'></div>

        {/* Main content column */}
        <div className='lg:col-span-8 px-4'>
          <div className='max-w-175 mx-auto border border-gray-300 p-6 rounded-lg'>
            {profileKeys.map((key) => (
              <ProfileInfoItems
                key={key.keyName}
                keyName={key.keyName}
                value={data?.data[key.keyName]}
              />
            ))}
          </div>
        </div>

        {/* Empty right column for spacing */}
        <div className='lg:col-span-2'></div>
      </div>
    </div>
  );
};

export default ProfilePage;

const ProfileInfoItems = ({ keyName, value }: { keyName: string; value: string }) => {
  return (
    <div className='w-full flex gap-6 py-2 border-b border-gray-100 last:border-0'>
      <h2 className='flex-1 font-bold capitalize text-gray-700'>{keyName}</h2>
      <h3 className='flex-[4] font-medium text-gray-600 break-words'>{value || 'Not provided'}</h3>
    </div>
  );
};
