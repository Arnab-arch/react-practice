// //import gallery from './gallery.js';
// //export default function App(){
// //  return(
// //    <Gallery/>
// //  );
// //}


// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img 
//         src="https://i.imgur.com/yXOvdOSs.jpg" 
//         alt="Hedy Lamarr" 
//         className="photo" 
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </>
//   );
// }
// export default function Bio() {
//   return (
//     <div>
//       <div className="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p className="summary">
//         You can find my thoughts here.
//         <br /><br />
//         <b>And <i>pictures</i> of scientists!</b>
//       </p>
//     </div>
//   );
// }
// const Man = {
//   name:"georgia",
//   theme:{
//     backgroundColor:"black",
//     color:"pink",
//     width:"100%",
//   }
// }; 
// function Person(){
//   return(<img
//   src="https://i.imgur.com/7vQD0fPs.jpg"
//   alt="Georgia V .Zara"

//   />);}
// function Acomps(){
//   return(
//     <ul>
//       <li>Improve the videophone</li>
//       <li>Improve the videophone</li>
//       <li>Improve the videophone</li>

//     </ul>

//   );
//   }
// export default function App(){
//   return (
//     <div style={Man.theme}>
//     <h1>{Man.name} TOdos</h1>
//     <Person/>
//     <Acomps/>
//     </div>



//   );
// }
// export default function Profile(){
//   return(
//     <Avatar
//     person={{name:"linyang",imageId: "1bX5QH6"}}
//     size={"100"}
    
    
//     />
//   );
// }

//import {Geturl} from "./utils.js";


// }

// export default function Profile(){
//   return(
//     <div>
//       <Avatar
//       size={100}
//       person={{
//         Name:"Katsuko Saruhashi",
//         imageId:"YfeOqp2"

//       }}
//       />
//       <h1>Hwllo</h1>
//       <Avatar
//       size={50}
//       person={{
//         Name:"Lin Lanying",
//         imageId:"1bX5QH6"

//         }}
     
//       />
      
//     </div>

//   );
// }
// import {Avatar} from './Avatar.js';

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{ 
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// function Item({name,ispacked}){
//     return(
//         <li className="item">
//             {ispacked ? name+"✅" : name}
//         </li>
//     );
// }
function Item({name,ispacked}){
    return(
        <li className="item">
            {ispacked ?(
                <del>
                    {name + "✅"}
                </del>
            ):(
                name
            )}

        </li>

    );
}
export default function PackingList(){
    return(
        <section>
            <h1>sally packing list </h1>
            <ul>
                <Item
                    ispacked={true}
                    name="space suit"
                />
                <Item
                    ispacked={false}
                    name="yogurt"
                />
                <Item
                    ispacked={true}
                    name="banana"
                />

            </ul>
        </section>
    );
}