import React from 'react'
import Link from 'next/link'

const ButtomCard = () => {
  return (
    <div>
      <button className="btn btn-primary">
        <Link href="/about">About</Link>
      </button>
    </div>
  )
}

export default ButtomCard