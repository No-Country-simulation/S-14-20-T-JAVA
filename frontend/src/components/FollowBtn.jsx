import { useState } from 'react'
const FollowBtn = () => {
    const[follow,setFollow] = useState(false)
    
    const transparent = 'font-roboto-flex text-primary text-xs px-7 py-2 font-semibold rounded-full border text-center border-primary'
    const purple =      'font-roboto-flex text-white text-xs px-2 py-2 font-semibold rounded-full bg-secondary border text-center border-primary'

    return (
    <div  className={follow ? purple : transparent}>

    <button 
    onClick={() => (setFollow(!follow))}
   
    >
        {
            follow ? "Dejar de seguir" : "Seguir"
        }
    </button>
        </div>
  )
}

export default FollowBtn