import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// 컴포넌트
import WordBox from "./WordBoxComponent";
// styled components
import { HeaderStyled, BodyStyled } from "./styleComponent";
// material Icon
import AddCircleIcon from "@mui/icons-material/AddCircle";

// db
import { useDispatch, useSelector } from "react-redux";
//
import { FBActionFn } from "./redux/modules/reduxWord";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./firebase";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initWordData = useSelector((state) => state.reducer);

  React.useEffect(() => {
    console.log("FB 접근 시작합니다.");
    dispatch(FBActionFn());
  });
  return (
    <>
      <HeaderStyled>
        <h1>영어 단어장</h1>
      </HeaderStyled>
      <BodyStyled>
        {initWordData.map((el, i) => (
          <WordBox initWordData={el} key={el[0] + i} />
        ))}
      </BodyStyled>
      <div>
        <AddCircleIcon
          onClick={() => navigate(`/word/add`)}
          style={{
            fontSize: "4.2rem",
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            cursor: "pointer",
          }}
          sx={{ "&:hover": { color: "green" } }}
        />
      </div>
    </>
  );
};

export default Home;
