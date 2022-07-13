import React, { useState } from "react";
import { WordContainerDivStyled } from "./styleComponent";
import { useNavigate } from "react-router-dom";
// meterial icons
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const WordBox = () => {
  const nav = useNavigate();

  const [checked, setChecked] = useState(false); // 체크박스 상태

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
              onClick={() => nav(`/word/:id/edit`)}
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              sx={{ "&:hover": { color: "green" } }}
            />
          </button>
          <button>
            <DeleteIcon
              onClick={() => nav(`/word/add`)}
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              sx={{ "&:hover": { color: "green" } }}
            />
          </button>
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
