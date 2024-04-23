
export default function Publications({Publications}) {
  
    return (
    <div className="h-full snap-y">
        
     <ul className="snap-y h-full overflow-y-auto" style={{
      display:"grid",
      gridTemplateColumns:'repeat(auto-fit,minmax(190px,2fr))',
      gridTemplateRows:'max-content',
      gap:'15px'}}> 
       {Publications 
         ?  Publications.map(publication => (
          <li key={ publication.idMeal }
           className="snap-proximity snap-center">
           <div className="relative snap-center">
            <img src={ publication.strMealThumb } className="w-full h-auto snap-center snap-always"/>
            <p className="bg-opacity-40 bg-black text-white absolute  
              w-full bottom-0 px-5 py-2">
              { publication.idMeal }k me gustas</p>
           </div>

            <div className="flex w-full gap-3 px-2 pt-2 pb-2  snap-center" >
             <img src="https://th.bing.com/th?id=OIF.uO63cq0OA%2b4L2Q78pulYDA&rs=1&pid=ImgDetMain" 
              className="w-6 h-6 rounded-full "/>
             <h6 className="snap-center">{publication.strMeal}</h6>
            </div>
          </li>
            )) 
          : <div>No resultados</div>}
           
        </ul>
    </div>
  )
}
