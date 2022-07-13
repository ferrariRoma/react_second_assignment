import React, { useState } from "react";
import { WordContainerDivStyled } from "./styleComponent";
import { useNavigate } from "react-router-dom";
// meterial icons
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const WordBox = ({ initWordData }) => {
  const navigate = useNavigate();
  const wordData = { ...initWordData };

  const [checked, setChecked] = useState(wordData[5]); // 체크박스 상태

  // 체크박스 클릭 핸들러
  const checkboxOnClick = () => {
    if (!checked) {
      return setChecked(true);
    }
    return setChecked(false);
  };

  return (
    <>
      <WordContainerDivStyled className={checked ? "checked__word" : ""}>
        <div>
          <button>
            <CheckBoxIcon
              onClick={() => checkboxOnClick()}
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              sx={{ "&:hover": { color: "green" } }}
            />
          </button>
          <button>
            <ModeEditIcon
              onClick={() =>
                navigate(`/word/${wordData.id}/edit/`, {
                  state: wordData,
                })
              }
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              sx={{ "&:hover": { color: "green" } }}
            />
          </button>
          <button>
            <DeleteIcon
              onClick={() => navigate(`/word/add`)}
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              sx={{ "&:hover": { color: "green" } }}
            />
          </button>
        </div>
        <div>
          <p className="word">{wordData[0]}</p>
          <p className="pronunciation">{wordData[1]}</p>
        </div>
        <p className="meaning">{wordData[2]}</p>
        <p className="eg">{wordData[3]}</p>
        <p className="eg">{wordData[4]}</p>
      </WordContainerDivStyled>
    </>
  );
};

export default WordBox;
