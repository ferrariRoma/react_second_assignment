import React from "react";
import { HeaderStyled, BodyStyled } from "./styleComponent";
import WordBox from "./WordBoxComponent";

const Home = () => {
  return (
    <>
      <HeaderStyled>
        <h1>영어 단어장</h1>
      </HeaderStyled>
      <BodyStyled>
        {/* wordbox컨테이너는 따로 styled가서 그리드 처리하기 */}
        <WordBox />
      </BodyStyled>
    </>
  );
};

export default Home;
