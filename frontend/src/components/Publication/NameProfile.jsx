import React from 'react'
import { GeneralButton } from '../GeneralButton'
const NameProfile = ({name, followers}) => {
  return (
    <div className='flex  items-center gap-4'>
       <div>
          <img
            className="rounded-full w-32 "
            src="../public/perfil.png"
            alt=""
          />
        </div>
        <article>
          <h6 className="text-lg font-extrabold ">{name}</h6>
          <p className="text-xs">{followers} Seguidores</p>
          <GeneralButton name={"Dejar de seguir"} />
        </article>
    </div>
  )
}

export default NameProfile
