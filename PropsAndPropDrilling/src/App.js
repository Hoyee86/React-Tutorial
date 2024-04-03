import { useState, UseEffect, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {
  // const name ="Hayzed";
  // API

  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([]);
  const [fetchEror, setFetchError] = useState(null)
 
   const [newItem, setNewItem] = useState('')
   const [search, setSearch] = useState('')
   const [isLoading, setIsLoading] = useState(true);

  //  useEffect(() => {
  //      console.log("render")
  //  })
   useEffect(() => {
      const fetchItems = async () => {

        try{
             const response = await fetch(API_URL )
             if(!response.ok) throw Error('The data is not accessible!')
             const listItems = await response.json()
             console.log(listItems)
             setItems(listItems)
        }catch (err) {
           setFetchError(err.messge)
        }finally{
         setIsLoading(false)
        }
      }
       setTimeout(() => {
         (async () => await fetchItems())()
       }, 1000);
   }, [])

//    const setAndSaveItem = (newItem) => {
//     setItems(newItem)
//     localStorage.setItem('shoppinglist', JSON.stringify(newItem));
//  }

   const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = {id, checked: false, item}
      const listItems = [...items, myNewItem]
      setItems(listItems)
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

          setItems(listItems)

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

     <main className='student'>
     <Content
       items={items.filter(item => ((item.item).toLowerCase().includes(search.toLocaleLowerCase())))}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
     />
     </main>
    
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
