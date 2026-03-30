import ListItems from "./components/ListItems";

function App() {
  return (
    <ul>
      <li>A</li>
      <li>B
        <ListItems />
      </li>
      <li>C</li>
    </ul>
  );
}

export default App;