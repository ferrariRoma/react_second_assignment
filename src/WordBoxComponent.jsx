import React from "react";
import { WordContainerDivStyled } from "./styleComponent";

const WordBox = () => {
  return (
    <>
      <WordContainerDivStyled>
        <div>
          <button>강조버튼</button>
          <button>수정버튼</button>
          <button>삭제버튼</button>
        </div>
        <div>
          <p className="word">Apple</p>
          <p className="pronunciation">[ˈæpl]</p>
        </div>
        <p className="meaning">사과</p>
        <p className="eg">an apple pie</p>
        <p className="eg">사과 파이</p>
      </WordContainerDivStyled>
    </>
  );
};

export default WordBox;
