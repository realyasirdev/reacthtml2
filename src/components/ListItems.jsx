import NewListItems from "./NewListItems";

function ListItems() {
  return (
    <ol>
      <li>B1</li>
      <li>B2
        <NewListItems />
      </li>
      <li>B3
        <ol>
          <li>B31</li>
          <li>B32</li>
        </ol>
      </li>
    </ol>
  );
}

export default ListItems;