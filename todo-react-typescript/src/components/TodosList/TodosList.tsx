import {
  TodosContainer,
  List,
  ItemBox,
  Item,
  StyledLink
} from "./TodosList.styles";

import Loading from "../misc/Loading";
import Error from "../misc/Error";

const TodosList = ({ value }: any) => {
  const { data, isError, isFetching } = value;

  return (
    <TodosContainer>
      {isFetching && <Loading />}
      {isError && <Error>{"Could not fetch data! 🔥"}</Error>}

      {!isError && !isFetching && (
        <List>
          {data.map((item: any, index: number) => (
            <StyledLink to={`${item.id}`}>
              <ItemBox key={item.id}>
                <Item>
                  {index + 1}. {item.title}
                </Item>
              </ItemBox>
            </StyledLink>
          ))}
        </List>
      )}
    </TodosContainer>
  );
};

export default TodosList;
