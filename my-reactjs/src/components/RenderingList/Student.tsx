import React from "react";

type StudentModel = {
  id: number;
  name: string;
  grade:  number;
};

//create object an assign value
const studentObject: StudentModel[] = [
  {
    id:1,
    name:"Koh Kel",
    grade:10,
  },
  {
    id:2,
    name:"Koh Kok",
    grade:11,
  },
  {
    id:3,
    name:"Koh Kuy",
    grade:12,
  }
]


const Student: React.FC = () => {
  return (
    <div>
        {studentObject.map((it) => (
          <div>
            <p>ID : {it.id}</p>
            <p>Name: {it.name}</p>
            <p>Grade : {it.grade}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Student;