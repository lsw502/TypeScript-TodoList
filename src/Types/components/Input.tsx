import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
function Input({ todos, setTodos }: { todos: any; setTodos: any }) {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  return (
    <StInputWrapper>
      <StInputButnWrapper
        onSubmit={(event) => {
          event.preventDefault();
          alert("할 일 목록이 추가 되었습니다.");
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          const newArray = [...todos, newTodo];
          setTodos(newArray);
        }}
      >
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="제목을 입력해주세요"
        ></input>
        <input
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
          placeholder="내용을 입력해주세요"
        ></input>
        <button type="submit">입력</button>
      </StInputButnWrapper>
    </StInputWrapper>
  );
}
export default Input;
const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StInputButnWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f6f6f6;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  input {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px;
    color: #68a5f4;
    font-size: 18px;
    padding: 5px 20px;
    font-weight: 600;
    &::placeholder {
      margin: 20px;
    }
  }
  button {
    width: 130px;
    height: 60px;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    color: #68a5f4;
    font-weight: 700;
    font-size: 20px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #68a5f4;
      color: #fff;
    }
  }
`;
