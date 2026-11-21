import React from 'react'
import { useGetCurrentUserQuery } from '@react-nx26-nov/http-client';

const CheckoutContainer = () => {

    const {data: users = []} = useGetCurrentUserQuery('1', {
      pollingInterval: 1000000,
    });
    const {refetch} = useGetCurrentUserQuery('1');
    
  return (
    <div>CheckoutContainer
        <div>{JSON.stringify(users)}</div>
        <button onClick={refetch}> Refetch user</button>
    </div>
  )
}

export default CheckoutContainer