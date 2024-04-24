import React from 'react'
import { GeneralButton } from '../GeneralButton'
const NameProfile = ({name, followers}) => {
  return (
    <div className='flex  items-end gap-4'>
       <div>
          <img
            className="rounded-full w-32 "
            src="../public/perfil.png"
            alt=""
          />
        </div>
        <article className='flex flex-col gap-3'>
          <h6 className="text-lg font-extrabold ">{name}</h6>
          <p className="text-xs">{followers} Seguidores</p>
          <GeneralButton name={"Dejar de seguir"} ClassName={'bg-primary text-white p-3 rounded-full '} />
        </article>
    </div>
  )
}

export default NameProfile
