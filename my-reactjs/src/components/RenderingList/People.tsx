import React from "react";

const people: string[] = [
  'Kok Dara',
  'Kok Tola',
  'Kok Seyha',
  'Kok Kong'
];

// const PeopleList = people.map((it) => <li>{it}</li>);

const People: React.FC = () => {
  return (<div> 
      <ul>
          {/* <li>Kok Dara</li>
          <li>Kok Tola</li>
          <li>Kok Seyha</li>
          <li>Kok Kong</li> */}
          {/* {
            people.map((it) => {
              return (<li>{it}</li>);
            })
          } */}
          {/* {PeopleList} */}

          {
            people.map((it) => (
              <li>{it}</li>
            ))
          }
      </ul>
  </div>);
}

export default People;