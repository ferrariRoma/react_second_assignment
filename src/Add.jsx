import React, { useRef, useState } from "react";
import { HeaderStyled, InputBodyStyled } from "./styleComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Add = () => {
  const navigate = useNavigate();

  // 각각의 input에 대한 ref
  const wordRefInput = useRef(false);
  const pronunciationRefInput = useRef(false);
  const meaningRefInput = useRef(false);
  const egRefInput = useRef(false);
  const translationRefInput = useRef(false);

  // 입력 필드가 다 채워지면 state변경
  const [isWritten, setIsWritten] = useState(false);

  const createData = {
    0: wordRefInput.current.value,
    1: pronunciationRefInput.current.value,
    2: meaningRefInput.current.value,
    3: egRefInput.current.value,
    4: translationRefInput.current.value,
  };

  // 입력 필드가 비었을 때는 버튼 비활성화하기
  const InputOnChange = () => {
    if (
      wordRefInput.current.value &&
      pronunciationRefInput.current.value &&
      meaningRefInput.current.value &&
      egRefInput.current.value &&
      translationRefInput.current.value
    ) {
      return setIsWritten(true);
    } else {
      return setIsWritten(false);
    }
  };

  // 입력 필드가 비었을 때 경고, 아니면 홈으로 보내기(나중에는 ADD액션함수 호출을 더할 예정)
  const btnOnClick = () => {
    if (isWritten) {
      console.log(createData);
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
          onChange={InputOnChange}
          ref={wordRefInput}
          name="word"
        />
        <input
          type="text"
          placeholder="발음"
          onChange={InputOnChange}
          ref={pronunciationRefInput}
          name="pronunciation"
        />
        <input
          type="text"
          placeholder="뜻"
          onChange={InputOnChange}
          ref={meaningRefInput}
          name="meaning"
        />
        <input
          type="text"
          placeholder="예문"
          onChange={InputOnChange}
          ref={egRefInput}
          name="eg"
        />
        <input
          type="text"
          placeholder="예문해석"
          onChange={InputOnChange}
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
