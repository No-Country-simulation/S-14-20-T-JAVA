
export default function Users({users}) {

  return (
   <ul className="flex flex-col gap-2">  
    {users.length > 0  
     ? users.map(user=>(
      <li key={user.id} className=" w-full flex items-center justify-between">
       <div className="flex items-center gap-3">
        
        <picture>
         <img className="rounded-full" 
          src='https://www.creativefabrica.com/wp-content/uploads/2022/10/09/Perfil-Beautiful-Bohemian-Girl-40889720-1.png'
          width={'38'} height={'38'}/>
        </picture>

        <section>
         <h6 className="font-medium">{user.name}</h6>
         <p className="text-disabled">Ropas y mucho mas</p>
        </section>

       </div>

       <button className="rounded-2xl border-primary border-[1px] text-[14px]
       text-primary py-[7px] px-8">Seguir</button>
      </li>
        ))
     : <div>No resultados</div>
    }    
   </ul>
  )
}
