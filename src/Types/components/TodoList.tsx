import React from "react";
import styled from "styled-components";
function TodoList({
  todos,
  setTodos,
  listIsDone,
}: {
  todos: any;
  setTodos: any;
  listIsDone: boolean;
}) {
  return (
    <>
      <div>
        <h2>{listIsDone ? "완료목록" : "할 일 목록"}</h2>
        <StWrapper>
          {todos
            .filter((todo: any) => todo.isDone === listIsDone)
            .map((todo: any) => {
              return (
                <StCardWrapper key={todo.id}>
                  <h3
                    style={{
                      color: "#68a5f4;",
                    }}
                  >
                    {todo.title}
                  </h3>
                  <p>{todo.contents}</p>
                  {/* <p>완료여부: {todo.isDone.toString()}</p> */}
                  <StBtnWrapper>
                    <StBtnStyle
                      onClick={() => {
                        const newTodos = todos.map((item: any) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });
                        setTodos(newTodos);
                      }}
                    >
                      {listIsDone ? "완료 취소" : "완료"}
                    </StBtnStyle>
                    ​
                    <StBtnStyle
                      onClick={() => {
                        const deletedTodos = todos.filter((item: any) => {
                          return item.id !== todo.id;
                        });
                        setTodos(deletedTodos);
                      }}
                    >
                      삭제
                    </StBtnStyle>
                  </StBtnWrapper>
                </StCardWrapper>
              );
            })}
        </StWrapper>
      </div>
    </>
  );
}
export default TodoList;
const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const StCardWrapper = styled.div`
  border: none;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  /* width: 300px; */
`;
const StBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
`;
const StBtnStyle = styled.button`
  border: none;
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #68a5f4;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #68a5f4;
    color: #fff;
  }
`;
