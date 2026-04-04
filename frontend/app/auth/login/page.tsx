'use client'

import { useAppDispatch } from '@/redux/hooks';
import { loginUserThunk } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import {useForm} from 'react-hook-form';


export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data: any) => {
    await dispatch(loginUserThunk(data));
    router.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")}type="text" placeholder='Email'/>
      <input {...register("password")}type="password" placeholder='PASS'/>
      <button>Login</button>
    </form>
  );
}