
export default function Publications({Publications}) {
  console.log(Publications)
    return (
    <div className="h-full snap-y">
        
     <ul className="snap-y h-full overflow-y-auto pt-3" style={{
      display:"grid",
      gridTemplateColumns:'repeat(auto-fit,minmax(190px,2fr))',
      gridTemplateRows:'max-content',
      gap:'15px'}}> 
       {Publications 
         ?  Publications.map(publication => (
          <li key={ publication.id }
           className="snap-proximity snap-center">
           <div className="relative snap-center max-w-96">
            <img src={`data:image/jpeg;base64,${publication.image[0].content} `} className="w-full h-auto snap-center snap-always"/>
            <p className="bg-opacity-40 bg-black text-white absolute  
              w-full bottom-0 px-5 py-2">
              { publication.id }k me gustas</p>
           </div>

            <div className="flex w-full gap-3 px-2 pt-2 pb-2  snap-center" >
             <img src="https://th.bing.com/th?id=OIF.uO63cq0OA%2b4L2Q78pulYDA&rs=1&pid=ImgDetMain" 
              className="w-6 h-6 rounded-full "/>
             <h6 className="snap-center">{publication.id}</h6>
            </div>
          </li>
            )) 
          : <div>No resultados</div>}
           
        </ul>
    </div>
  )
}
