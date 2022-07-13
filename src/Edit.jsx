import React, { useRef, useState } from "react";
import { HeaderStyled, InputBodyStyled } from "./styleComponent";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionUpdateFn } from "./redux/modules/reduxWord";

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

  // 입력 필드가 다 채워지면 state변경
  const [isWritten, setIsWritten] = useState(false);

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
        0: wordRefInput.current.value,
        1: pronunciationRefInput.current.value,
        2: meaningRefInput.current.value,
        3: egRefInput.current.value,
        4: translationRefInput.current.value,
        5: wordData.id,
      };
      dispatch(actionUpdateFn(createData));
      setIsWritten(true);

      return navigate("/");
    } else {
      setIsWritten(false);
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
          defaultValue={wordData[0]}
        />
        <input
          type="text"
          placeholder="발음"
          ref={pronunciationRefInput}
          name="pronunciation"
          defaultValue={wordData[1]}
        />
        <input
          type="text"
          placeholder="뜻"
          ref={meaningRefInput}
          name="meaning"
          defaultValue={wordData[2]}
        />
        <input
          type="text"
          placeholder="예문"
          ref={egRefInput}
          name="eg"
          defaultValue={wordData[3]}
        />
        <input
          type="text"
          placeholder="예문해석"
          ref={translationRefInput}
          name="translation"
          defaultValue={wordData[4]}
        />

        <button type="submit" onClick={btnOnClick}>
          등록하기
        </button>
      </InputBodyStyled>
    </>
  );
};

export default Edit;
