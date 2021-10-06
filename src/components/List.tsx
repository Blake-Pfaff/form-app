import React from "react";

//Types
type IProps = {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
};

const List: React.FC<IProps> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        return (
          <li className="List" key={person.name}>
            <div className="List-header">
              <img src={person.url} alt={person.name} className="List-img" />
              <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
