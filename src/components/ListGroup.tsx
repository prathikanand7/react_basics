//import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
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

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item(s) found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
