import React from 'react'

function Badge({featured}) {
  return (
    <div>
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-full ${featured.badgeColor} `}>{featured.badge}</span>
    </div>
  )
}

export default Badge