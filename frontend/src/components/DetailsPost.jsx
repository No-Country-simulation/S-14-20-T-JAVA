import React from 'react'
import UserIconFilled from './icons/UserIconFilled';
import { useLocation } from 'react-router-dom';
import IconLike from './icons/IconLike';
import IconComment from './icons/IconComment';
import IconFavorite from './icons/IconFavorite';
import IconUser from './icons/IconUser';
import FollowBtn from './FollowBtn';
import IconShare from './icons/IconShare';

export default function DetailsPost() {
  let {state} = useLocation()
  console.log(state)
    return (
        <main className="w-full max-w-[1700px]  font-roboto-flex p-14 mt-24  mb-[100px] max-sm:p-4
        flex flex-wrap gap-6 justify-center bg-white  mx-auto max-2xl:flex-col">
         <picture className='w-[70%] max-xl:w-full'>
            <img width={'100%'} src={`data:image/png;base64,${state.image?.[0]?.content}`} className="max-w-full h-auto object-cover " alt="" />
         </picture>
         <div className=' w-[25%] max-xl:w-full'>
         <header className="flex items-center justify-between my-4">
            <div className="flex items-center">
            <UserIconFilled className=""/>
            <div className=" flex flex-col ml-2">
                      <h3 className="font-semibold  text-base">
                      Yhordi Choque
                      </h3>
                      <p className="text-sm font-normal text-[#717171]">{state.category.toLowerCase()}...</p>
            </div>
            </div>
            <div className="flex items-center">
              <FollowBtn className="mr-2"/>
            </div>
          </header>
          <section key={state.id}
          className=""  >
         
          <h6 className="font-semibold text-lg">
          {state.title}
          </h6>
              <p className="font-roboto-flex">
    
              {state.content}
              </p>
          </section>
          <footer className="flex flex-row gap-2 my-4">
            <IconLike/>
            <IconComment/>
            <IconFavorite/>
          </footer>
         <section className='flex items-center w-full gap-4 '> 

          <section className='bg-primary p-3 rounded-full'>
           <IconUser Class={'stroke-white'}/>
          </section>

          <section className='flex w-full items-center relative'>
            <textarea className='w-full overflow-hidden  h-auto  rounded-full border-[1px] border-primary
            pl-4 pr-10 pt-2' placeholder='Comenta' title='comentario'  
             >
            </textarea>
            <IconShare Class={'absolute right-4'}/>
          </section>
        
         </section>
         </div>
          
    
        </main>
      );
}
