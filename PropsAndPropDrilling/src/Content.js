
import ItemList from './ItemList';
import './content.css';

const Content = ({items, handleCheck, handleDelete}) => {

  // const [name, setName] = useState('basirah')
   


  return (
    <>
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handeleClick}>Click me</button>
      <button onDoubleClick={() => handeleClick2('Hayzed')}>Click me</button> */}

       {items.length ? (
        <ItemList
           items={items}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
        />
        

       ):(
        <p style={{marginTop: "2rem"}}>Your list is Empty</p>
       )}
       
    </>
  )
}

export default Content
