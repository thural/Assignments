import { useState } from "react";
import TodoBoard from "../components/TodoBoard";
import Grid from "@mui/material/Grid";
import Form from "../components/Form"
import Counter from "../components/Counter"
import { TodoType } from "../types/types"
import Header from "../components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { getTodos } from "../store/todos";

export async function loader() {
    const todos = await getTodos();
    return { todos };
}

const styles = {
    margin: '0 auto',
    width: 'fit-content',
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    gridTemplateRows: '1fr 1fr 8fr',
    gridTemplateColumns: '1fr 2fr',
    maxHeight: '100vh',
    backgroundColor: "whitesmoke"
}

export default function Root() {

    const [todos, setTodos] = useState<TodoType[]>(useLoaderData().todos);

    console.log(todos[0])

    const handleForm = (event) => {
        event.preventDefault();
        const { value }: { value: string } = event.target.task
        setTodos([{ title: value, id: todos.length, userId: 1, completed: true }, ...todos]);
    }

    return (
        <Grid sx={styles}>
            <Header />
            <Form handleForm={handleForm} />
            <TodoBoard todos={todos} />
            <Outlet />
            <Counter />
        </Grid>
    );
}