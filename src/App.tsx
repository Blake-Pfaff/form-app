import React, { useState } from "react";
//comps
import List from "./components/List";

import "./App.css";

//Types
type IState = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
};

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Some Dude",
      age: 36,
      url: "https://www.placecage.com/200/300",
      note: "Do not feed after midnight!",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to the party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
