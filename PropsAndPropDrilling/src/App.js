import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';



function App() {
  // const name ="Hayzed";

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
    <div className="App">
     <Header tittle = "Wellcome to props"/>
     <Content
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
     />
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
