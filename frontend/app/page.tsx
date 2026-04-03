import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <Link href={'/auth/register'}>
      <Button variant={"destructive"}>Register</Button>    
      </Link>
      <Link href={'/auth/login'}>
      <Button variant={"destructive"}>Login</Button>   
      </Link>
          
    </div>
  )
}

export default LandingPage
