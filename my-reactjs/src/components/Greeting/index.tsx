import "../Css/style.css";

const Ti = "Beutiful";

interface MyObject{
  id: number;
  name: string;
  position: string;
}

const myObject: MyObject = {
  name: "Kok",
  id: 1,
  position: "IT"
}

const Greeting = () => {
  
  return (
    <div>
        <h1 title={Ti}>Hello cambodai</h1>

        <ul> Object Person:
            <li>ID: {myObject.id}</li>
            <li>Name: {myObject.name.toUpperCase()}</li>
            <li>Position: {myObject.position}</li>
        </ul>
        <h1 id="external">Welcom</h1>
    </div>
  )
}

export default Greeting;