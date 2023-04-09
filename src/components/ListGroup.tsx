//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

//***Props***
// {items: [], heading:string}
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  /*   items = []; */
  /*   if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No item(s) found</p>
      </>
    );
  const message = items.length === 0 ? <p>No item(s) found</p> : null;
  
  //***calling inside a function***
  const getMessage = () => {
    const message = items.length === 0 ? <p>No item(s) found</p> : null;
  }; */

  //***hook***; hooks allow us to tap into built-in features in react
  //so this is called statehook.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*   arr[0]; //variable (selectionIndex)
  arr[1]; //updater function */

  //***event handler function***
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item(s) found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            /* className="list-group-item active" */
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            /* onClick={handleClick} */
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
