import { useEffect, useState } from "react";
import IconImage from "./icons/IconImage";
import UserIconFilled from "./icons/UserIconFilled";
import useCategories, { baseUrl } from "../hooks/categories";
import axios from "axios";
import Swal from "sweetalert2";

const LoadImage = () => {

  const idUser = localStorage.getItem('idUser')
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [categories,setCategories]=useState([])
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [valorSeleccionado, setValorSeleccionado] = useState('');
console.log(title)
console.log(content)
console.log(valorSeleccionado)
console.log(selectedFile)



  const handleCambio = (e) => {
    setValorSeleccionado(e.target.value);
  };
  useEffect(() => {
    const formData = new FormData();
   
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', valorSeleccionado);
    formData.append('idUser', idUser);
    formData.append('images', selectedFile);
    console.log(formData)
    useCategories()
    .then(response => setCategories(response))
  },[imageUrl,selectedFile,title,content,valorSeleccionado])
  const handleFileChange = async (event) => {
    console.log(event.target.files[0])
    const file = await event.target.files[0];
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
  setImageUrl(imageUrl);
  }
  ;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Crea un objeto FormData
   
    // Agrega los campos del formulario al objeto FormData
    
    // Envía los datos al servidor usando fetch o axios
    try {

      await axios.post(`${baseUrl}posts/create`, formData)
      Swal.fire({
        icon: 'success',
        title: 'Publicación Creada',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!',
      })
    }
  };
  return (
    <>
    <div className="flex flex-row justify-between gap-2 font-roboto-flex">

    <h3 className="font-semibold font-roboto-flex text-xl">Nueva Publicación</h3>
    {valorSeleccionado &&<button 
    className="flex items-center justify-center bg-primary  hover:bg-primaryPressed  rounded-full min-w-[211px] min-h-[50px]  max-w-96 font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton md:text-button-font-size"
    type="button"
    onClick={handleSubmit}
    >Crear post</button>}
    </div>

  <form className=" grid grid-cols-2 font-roboto-flex">
    <section>
      
    {imageUrl ? 
    (<img src={imageUrl}  className=" w-96 h-auto object-cover" alt="Imagen seleccionada" />):(<IconImage/>)}
  <label
        htmlFor="file-upload"
        className="flex items-center justify-center bg-primary  hover:bg-primaryPressed  rounded-full min-w-[211px] min-h-[50px]  max-w-96 font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton md:text-button-font-size"
        >
        {selectedFile ? selectedFile.name : 'Selecciona una imagen'}
      </label>
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        onChange={handleFileChange}
        className="hidden"
        />
        </section>
      {
        imageUrl && 
        <section className=" m-2">
          <div className="flex flex-row gap-2 items-center justify-center">
          <UserIconFilled/>
          <input type="text" 
          value={title} 
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Nombre de la publicación" className=" w-80 h-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary items-center justify-center bg-gray-50" />
          </div>
          <div className=" flex flex-col my-5">

          <h6 className="py-2">Descripción</h6>
         <textarea className="focus:outline-none focus:ring-2 focus:ring-primary rounded-xl bg-gray-50 w-96 h-32" 
         value={content} id="content" name="content" onChange={(e) => setContent(e.target.value)}  />
         
          <h6 className="py-2">
          Categoría
          </h6>
          <select
        value={valorSeleccionado}
        id="category"
        name="category"
        onChange={handleCambio}
        className="form-select appearance-none block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        
        <option value="">Selecciona una opción</option>
        {categories.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
        </select>
          </div>
        </section>
      }
      {/* <button 
    className="flex items-center justify-center bg-primary  hover:bg-primaryPressed  rounded-full min-w-[211px] min-h-[50px]  max-w-96 font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton md:text-button-font-size"
    type="button"
    onClick={(e)=>handleSubmit(e)}
    >Crear post</button> */}
</form>
    </>
  )
}

export default LoadImage

