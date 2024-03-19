import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import './content.css'

const Content = () => {

  // const [name, setName] = useState('basirah')
   const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri"
    },

    {
      id: 2,
      checked: false,
      item: "rice"
    },

    {
      id: 3,
      checked: false,
      item: "semo"
    },

    {
      id: 4,
      checked: false,
      item: "ponmo"
    },

   ])
    // const handleNameChange = () => {
    //     const names = ["Fulani", "Hoyee", "Eef"];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int])
    //   };

     



    //    const handeleClick2 = (name) => {
    //          console.log(`${name} was clicked`)
    //    }
  return (
    <main className='student'>
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handeleClick}>Click me</button>
      <button onDoubleClick={() => handeleClick2('Hayzed')}>Click me</button> */}


       <ul>
        {items.map((item) =>{
        return(
           <li className='item' key={item.id}>
               <input type='checkbox' checked={item.checked} />

               <label>{item.item}</label>
               <FaTrash />
              
           </li>
        )
         } )}
       </ul>

    </main>
  )
}

export default Content
