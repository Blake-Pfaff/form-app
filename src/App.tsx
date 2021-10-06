import React, { useState } from "react";

import "./App.css";

type IState = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
};

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  people.map((person) => {
    person.name;
  });

  return (
    <div className="App">
      <h1>People Invited to the party</h1>
    </div>
  );
}

export default App;
