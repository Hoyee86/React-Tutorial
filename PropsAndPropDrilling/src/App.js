import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {
  // const name ="Hayzed";

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))
 
   const [newItem, setNewItem] = useState('')
   const [search, setSearch] = useState('')

   const setAndSaveItem = (newItem) => {
    setItems(newItem)
    localStorage.setItem('shoppinglist', JSON.stringify(newItem));
 }

   const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked: false, item}
      const listItems = [...items, myNewItem]
      setAndSaveItem(listItems)
      // setItems(listItems)
      // localStorage.setItem('shoppinglist', JSON.stringify(listItems));
   }

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

          setAndSaveItem(listItems)

          // setItems(listItems); 
          // localStorage.setItem('shoppinglist', JSON.stringify(listItems))
      }


      const handleDelete = (id) => {
         const listItems = items.filter((item)=> item.id !==id);
         setItems(listItems);  
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem)
        setNewItem('')
      }
 
  return (
    <div className="App">
     <Header tittle = "Wellcome to props"/>
     <SearchItem 
       search={search}
       setSearch={setSearch}
     />
     <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
     />
     <Content
       items={items.filter(item => ((item.item).toLowerCase().includes(search.toLocaleLowerCase())))}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
     />
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
