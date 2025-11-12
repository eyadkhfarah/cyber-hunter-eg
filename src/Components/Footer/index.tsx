import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="grid place-items-center bg-dark m-24 p-9 py-16 rounded-4xl">
      <h2 className='text-white text-2xl mb-6 font-bold'>Ready to get started? we&apos;re here to help! Request a demo below</h2>
      <Link href={"/contact"} className='btnPrimary'>Request the demo</Link>
    </div>
    <footer>index</footer>
    </>
  )
}
