'use client'

import TokenTransfer from '@/components/TokenTransfer'
import Storage from '@/components/Storage'
import { DynamicWidget } from "@/lib/dynamic"
import React from 'react'
import { useAccount } from 'wagmi'
import Link from 'next/link'

const page = () => {

  const { address } = useAccount()

  return (
    <main className="h-screen w-full flex justify-center items-center bg-black text-white">
      <div className='flex flex-col gap-20 items-center'>
        <Link href="/">
          Back to Home
        </Link>
        <div className="flex flex-col gap-5 items-center">
          <DynamicWidget />
          {address ? (
            <div className="flex flex-col gap-5 items-center">
              <TokenTransfer />
              <Storage />
            </div>
          ) : (
            <p className="text-red-500">Connect Your Wallet</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default page