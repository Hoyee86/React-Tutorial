
import './content.css'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Fulani", "Hoyee", "Eef"];
        const int = Math.floor(Math.random() * 3);
        return names[int]
      };

       const handeleClick = () =>{
        console.log("You clicked")
       };



       const handeleClick2 = (name) => {
             console.log(`${name} was clicked`)
       };
  return (
    <main className='student'>
      <h1>{handleNameChange()}</h1>
      <button onClick={handeleClick}>Click me</button>
      <button onDoubleClick={() => handeleClick2('Hayzed')}>Click me</button>
    </main>
  )
}

export default Content
