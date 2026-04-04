'use client'

import { useAuthInit } from '@/hooks/userAuthInit'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { logout } from '@/redux/slices/authSlice'

export default function DashboardPage(){
  useAuthInit();

  const {user, isLoading} = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  if(isLoading) return <p>Loding...</p>
  if(!user) return <p>Unauthorized...</p>
  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  )
};
