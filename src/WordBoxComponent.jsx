import React, { memo, useState } from "react";
import { WordContainerDivStyled } from "./styleComponent";
import { useNavigate } from "react-router-dom";
// meterial icons
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
// redux and action Fn
import { useDispatch } from "react-redux";
import { FBActionUpdateFn, FBActionDeleteFn } from "./redux/modules/reduxWord";

const WordBox = memo(({ initWordData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wordData = { ...initWordData };

  const [checked, setChecked] = useState(wordData.checked); // 체크박스 상태

  // 체크박스 클릭 핸들러
  const checkboxOnClick = () => {
    if (!checked) {
      dispatch(FBActionUpdateFn({ ...wordData, checked: true }));
      return setChecked(true);
    }
    dispatch(FBActionUpdateFn({ ...wordData, checked: false }));
    return setChecked(false);
  };

  const deleteBtnOnClick = () => {
    dispatch(FBActionDeleteFn(wordData.id));
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
              onClick={deleteBtnOnClick}
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              sx={{ "&:hover": { color: "green" } }}
            />
          </button>
        </div>
        <div>
          <p className="word">{wordData.word}</p>
          <p className="pronunciation">{wordData.pronun}</p>
        </div>
        <p className="meaning">{wordData.meaning}</p>
        <p className="eg">{wordData.eg}</p>
        <p className="eg">{wordData.translate}</p>
      </WordContainerDivStyled>
    </>
  );
});

export default WordBox;
