'use client'

import { useAppDispatch } from '@/redux/hooks';
import { registerUserThunk } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import {useForm} from 'react-hook-form';


export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data: any) => {
    await dispatch(registerUserThunk(data));
    router.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}type="text" placeholder='Name'/>
      <input {...register("email")}type="text" placeholder='Email'/>
      <input {...register("password")}type="password" placeholder='PASS'/>
      <button>Register</button>
    </form>
  );
}