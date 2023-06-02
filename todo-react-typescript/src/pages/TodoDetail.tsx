import { useParams } from 'react-router-dom'
import { useGetTodoItemQuery } from '../store/api/todosApi'
import TodosItem from '../components/TodosItem/TodosItem'
import Loading from '../components/misc/Loading'
import Error from '../components/misc/Error'

const TodosDetail = () => {
    const { id } = useParams()
    const { data, isError, isFetching } = useGetTodoItemQuery(id)

    return (
        <>
            {isFetching && <Loading />}
            {isError && <Error>{'Could not fetch data! 🔥'}</Error>}
            {data && <TodosItem todo={data} />}
        </>
    )
}

export default TodosDetail
