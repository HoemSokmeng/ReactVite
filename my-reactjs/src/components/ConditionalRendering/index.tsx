import React from "react";

interface ItemProps{
  name: string;
  isPacked: boolean;
}

// const Item: React.FC<ItemProps> = (props) => {
//   const {name, isPacked} = props;
//   if(isPacked){
//     return <li>{name} 👌🏻</li>
//   }
//   return <li>
//     {name}
//   </li>
//}
// const Item: React.FC<ItemProps> = (props) => {
//   const {name, isPacked} = props;
//   return isPacked ? null : <li>{name} 👌🏻</li>;

// }

const Item: React.FC<ItemProps> = (props) => {
  const {name, isPacked} = props;
  // return <li>{name} {isPacked && "👌🏻"}</li>;
  return <>{
    !isPacked && <li>{name}</li> //false
  }</>

}


export default Item;