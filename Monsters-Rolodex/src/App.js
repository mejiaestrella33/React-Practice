import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  //const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  /*   const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }; */

  return (
    <div className="App">
      <h1 className="app-title">title</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search-monsters"
        className="monsters-search-box"
      />

      {/*       <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="set title"
        className="title-search-box"
      /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
