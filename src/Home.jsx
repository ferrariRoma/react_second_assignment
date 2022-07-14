import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// 컴포넌트
import WordBox from "./WordBoxComponent";
// styled components
import { HeaderStyled, BodyStyled } from "./styleComponent";
// material Icon
import AddCircleIcon from "@mui/icons-material/AddCircle";

// db
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  const initWordData = useSelector((state) => state.reducer);

  useEffect(() => {}, [initWordData]);

  return (
    <>
      <HeaderStyled>
        <h1>영어 단어장</h1>
      </HeaderStyled>
      <BodyStyled>
        {initWordData.map((el) => (
          <WordBox initWordData={el} key={Date.now() + Math.random() * 100} />
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
