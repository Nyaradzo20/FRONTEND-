import {  } from "react";

function ListGroup() {
  let items = ["Gweru","Harare","Cairo","Blantyre"]
  

  const handleClick = (Event) => console.log(Event);
  //conditional rendering
// let items = ["Gweru","Harare","Cairo","Blantyre"]
//items =[];

  return(
    
  <>
<h1>List</h1>
{items.length === 0 && <p>No item found</p>}             
{/*with braces you can render anything dynamically  in react*/}
<br></br>
    <ul className="list-group">
     {  items.map(( item, index) => (     // we cant use a for loop or any loop mujsx so toshandisa 
     <li className="list-group-item"
      key={item}
      onClick={()=> 
      console.log(Event)}
     >{item}</li>
      //eaCH part should have a key to make it easier kuziva kuti which part to add to the page
    ))}

    </ul>
  </>



);
  }
export default ListGroup;
