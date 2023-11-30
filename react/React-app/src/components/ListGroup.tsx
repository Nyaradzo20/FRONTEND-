import { useState } from "react";
//import { MouseEvent } from "react";
//{items: [],heading:string}
interface Props{
  items: string[];
  heading:string;
  //{item:string} => void
  onSelectItem:{item:string} => void;

}




function ListGroup({items, heading}:Props) {
  //const items = ["Gweru","Harare","Cairo","Blantyre"]
  
//let selectedIndex = 0;
//hook allows us to use buit in functions in react

const [selectedIndex, setSelectedIndex]= useState(-1); //returns array

//const [name, setName] = useState('');
//arr[0]//variable (selectedIndex)
//arr[1]//updater function to update variable which will update the dom
  //const handleClick = (Event:MouseEvent) => console.log(Event);
  //conditional rendering
// let items = ["Gweru","Harare","Cairo","Blantyre"]
//items =[];

  return(
    
  <>
<h1>{heading}</h1>
{items.length === 0 && <p>No item found</p>}             
{/*with braces you can render anything dynamically  in react*/}
<br></br>
    <ul className="list-group">
     {  items.map(( item, index) => (     // we cant use a for loop or any loop mujsx so toshandisa 
     <li className= {selectedIndex === 
      index ? 'list-group-item active' : 'list-group=item'}
      key={item}
      //onClick={handleClick} for events

      onClick={ () => {setSelectedIndex(index);}}//item gets selected when you click
     >{item}
     </li>
      //eaCH part should have a key to make it easier kuziva kuti which part to add to the page
    ))}

    </ul>
  </>



);
  }
export default ListGroup;
