import React, { useRef } from "react";
import { HeaderStyled, InputBodyStyled } from "./styleComponent";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FBActionUpdateFn } from "./redux/modules/reduxWord";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state } = useLocation();
  const wordData = { ...state };

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
        id: wordData.id,
      };
      dispatch(FBActionUpdateFn(createData));

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
        <input
          type="text"
          placeholder="단어"
          ref={wordRefInput}
          name="word"
          defaultValue={wordData.word}
        />
        <input
          type="text"
          placeholder="발음"
          ref={pronunciationRefInput}
          name="pronunciation"
          defaultValue={wordData.pronun}
        />
        <input
          type="text"
          placeholder="뜻"
          ref={meaningRefInput}
          name="meaning"
          defaultValue={wordData.meaning}
        />
        <input
          type="text"
          placeholder="예문"
          ref={egRefInput}
          name="eg"
          defaultValue={wordData.eg}
        />
        <input
          type="text"
          placeholder="예문해석"
          ref={translationRefInput}
          name="translation"
          defaultValue={wordData.translate}
        />

        <button type="submit" onClick={btnOnClick}>
          수정하기
        </button>
      </InputBodyStyled>
    </>
  );
};

export default Edit;
