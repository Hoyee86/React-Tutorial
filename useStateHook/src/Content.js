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

   ]);
    // const handleNameChange = () => {
    //     const names = ["Fulani", "Hoyee", "Eef"];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int])
    //   };

     



    //    const handeleClick2 = (name) => {
    //          console.log(`${name} was clicked`)
    //    }


       

      const handleCheck = (value) => {
          //  console.log(`key: ${id}`)
          const listItems = items.map((item)=>
             item.id === value? {...item, checked: !item.checked} : item
          );
          setItems(listItems); 
          localStorage.setItem('shoppinglist', JSON.stringify(listItems))
      }


      const handleDelete = (id) => {
         const listItems = items.filter((item)=> item.id !==id);
         setItems(listItems);  
      }


  return (
    <main className='student'>
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handeleClick}>Click me</button>
      <button onDoubleClick={() => handeleClick2('Hayzed')}>Click me</button> */}

       {items.length ? (
        <ul>
        {items.map((item) =>{
        return(
           <li className='item' key={item.id}>
               <input type='checkbox' 
                onClick={()=>handleCheck(item.id)}  // This code writting make the checkbox clickable with anonymous function inside input type
               checked={item.checked} />
               <label style={(item.checked) ? {textDecoration: "line-through"} : null } 
               onDoubleClick={()=>handleDelete(item.id)}>{item.item}</label>
               <FaTrash onClick={()=>handleDelete(item.id)} />
           </li>
        )
         } )}
       </ul>

       ):(
        <p style={{marginTop: "2rem"}}>Your list is Empty</p>
       )}
       
    </main>
  )
}

export default Content
