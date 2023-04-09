//import { Fragment } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  /*   items = []; */
  /*   if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No item(s) found</p>
      </>
    ); */

  /*   const message = items.length === 0 ? <p>No item(s) found</p> : null;

  //inside a function
  const getMessage = () => {
    const message = items.length === 0 ? <p>No item(s) found</p> : null;
  }; */

  //event handler function
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item(s) found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
