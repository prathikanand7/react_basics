/* import Alert from "./components/Alert"; */
import Button from "./components/Button";
/* import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
 */
/* function App() {
  return (
    <div>
      <Alert>
        Hello <span>Ajay</span>
        {" hello"} /*html content*/
/*       </Alert>
    </div>
  );
}
export default App;*/

function App() {
  return (
    <div>
      <Button /* color="primary" */ onClick={() => console.log("clicked")}>
        My button
      </Button>
    </div>
  );
}
export default App;
