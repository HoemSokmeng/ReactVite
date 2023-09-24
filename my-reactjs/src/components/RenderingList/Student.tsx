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
  , 
  {
    id:4,
    name:"Koh Kou",
    grade:12,
  },
  {
    id:5,
    name:"Koh Kng",
    grade:12,
  },
  {
    id:6,
    name:"Koh Kong",
    grade:12,
  }
];

// const FillterStudent: React.FC = () => {
//   console.log(
//     "Hello Kok: ", studentObject.filter((it) => it.grade === 12);
//   )


  // return (
  //   <div>
  //       {studentObject.map((it) => (
  //         <div>
  //           <p>ID : {it.id}</p>
  //           <p>Name: {it.name}</p>
  //           <p>Grade : {it.grade}</p>
  //           <hr />
  //         </div>
  //       ))}
  //   </div>
  // );
//};


const FillterStudent: React.FC = ()   => {
  // console.log( "Hello Kok: ", studentObject.filter((it) => it.grade === 12)
  // )
  
  return (

    <div>

        {studentObject.filter((it) => it.grade === 12).map((it, inde) => (
          <div key={inde}>
            <p>ID : {it.id}</p>
            <p>Name: {it.name}</p>
            <p>Grade : {it.grade}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default FillterStudent;