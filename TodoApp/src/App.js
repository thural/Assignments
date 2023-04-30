import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { TodoBoard } from "./components/TodoBoard";



const useStyles = createUseStyles(
   {
      wrapper: {
         margin: '0 auto',
         width: 'fit-content',
         display: 'grid',
         justifyContent: 'center',
         justifyItems: 'center',
         gridTemplateRows: '1fr 5fr',
         maxHeight: '100vh'
      }
   }
);

const App = () => {

   const fetchTodos = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos');
      const items = await data.json();
      //console.log(items);
      setTodos(items.slice(0,30));
   };

   const [todos, setTodos] = useState(["apple"]);
   useEffect(() => { fetchTodos() }, []);
   const classes = useStyles();

   return (
      <div className={classes.wrapper}>
         <>
         <h1>My Simple Todo App</h1>
         <TodoBoard todos={todos}/>
         </>

      </div>
   );
};

export default App;