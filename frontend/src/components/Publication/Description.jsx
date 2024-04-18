import React from 'react'

const Description = ({description}) => {
  return (
    <div className='flex gap-4 flex-col'>
        <h6 className="font-extrabold text-xs">Descripción</h6>
        <p className="text-xs">
        {description}
        </p>
    </div>
  )
}

export default Description
