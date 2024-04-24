
export default function Users({users}) {

  return (
   <ul className="flex flex-col gap-2 h-full w-full overflow-y-auto content-start "
   style={{
    display:"grid",
    gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',
    gap:'25px'}}>  
    {users.length > 0  
     ? users.map(user=>(
      <li key={user.id} className=" w-full flex items-start">
       <div className="flex items-start gap-3 w-full">
        
        <picture className="w-full max-w-28 ">
         <img className="rounded-full" 
          src='https://www.creativefabrica.com/wp-content/uploads/2022/10/09/Perfil-Beautiful-Bohemian-Girl-40889720-1.png'
          width={'100%'} height={'100%'}/>
        </picture>

        <section className="w-full flex flex-wrap justify-between items-center">
          <section>
          <h6 className="font-medium">{user.name}</h6>
         <p className="text-disabled">Ropas y mucho mas</p>

          </section>
        
       <button className="rounded-2xl border-primary border-[1px] text-[14px]
       text-primary py-[7px] px-8 w-20 h-9 flex items-center justify-center">Seguir</button>
        </section>

       </div>

      </li>
        ))
     : <div>No resultados</div>
    }    
   </ul>
  )
}
