import ListGroup from "./components/ListGroup";

function App(){
 
  const items = ["Gweru","Harare","Cairo","Blantyre"]

  return  <div>
    <ListGroup items={items} heading="Cities" onSelectItem={}/>
  </div>;
}
export default App;