import React, { useRef } from "react";
import { HeaderStyled, InputBodyStyled } from "./styleComponent";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FBActionCreateFn } from "./redux/modules/reduxWord";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 각각의 input에 대한 ref
  const wordRefInput = useRef(false);
  const pronunciationRefInput = useRef(false);
  const meaningRefInput = useRef(false);
  const egRefInput = useRef(false);
  const translationRefInput = useRef(false);

  // 입력 필드가 비었을 때 경고, 아니면 홈으로 보내기(나중에는 ADD액션함수 호출을 더할 예정)
  const btnOnClick = () => {
    if (
      !(
        wordRefInput.current.value === "" ||
        pronunciationRefInput.current.value === "" ||
        meaningRefInput.current.value === "" ||
        egRefInput.current.value === "" ||
        translationRefInput.current.value === ""
      )
    ) {
      const createData = {
        word: wordRefInput.current.value,
        pronun: pronunciationRefInput.current.value,
        meaning: meaningRefInput.current.value,
        eg: egRefInput.current.value,
        translate: translationRefInput.current.value,
      };

      dispatch(FBActionCreateFn(createData));
      return navigate("/");
    } else {
      return alert("입력 칸을 모두 채우세요.");
    }
  };

  return (
    <>
      <HeaderStyled>
        <h1>영어 단어장</h1>
      </HeaderStyled>
      <InputBodyStyled>
        <input type="text" placeholder="단어" ref={wordRefInput} name="word" />
        <input
          type="text"
          placeholder="발음"
          ref={pronunciationRefInput}
          name="pronunciation"
        />
        <input
          type="text"
          placeholder="뜻"
          ref={meaningRefInput}
          name="meaning"
        />
        <input type="text" placeholder="예문" ref={egRefInput} name="eg" />
        <input
          type="text"
          placeholder="예문해석"
          ref={translationRefInput}
          name="translation"
        />

        <button type="submit" onClick={btnOnClick}>
          등록하기
        </button>
      </InputBodyStyled>
    </>
  );
};

export default Add;
