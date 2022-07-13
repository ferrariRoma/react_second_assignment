// initData(temporary)

import { useSelector } from "react-redux";

// 0: word, 1: pronunciation, 2: meaning, 3: eg, 4: trasition, 5: checked, 6: id
export const initWordData = [
  {
    0: "Apple",
    1: "[ˈæpl]",
    2: "사과",
    3: "an apple pie",
    4: "사과 파이",
    5: false,
    id: 32141234123412341234,
  },
  {
    0: "Apple",
    1: "[ˈæpl]",
    2: "사과",
    3: "an apple pie",
    4: "사과 파이",
    5: true,
    id: 5132441623546,
  },
  {
    0: "Apple",
    1: "[ˈæpl]",
    2: "사과",
    3: "an apple pie",
    4: "사과 파이",
    5: false,
    id: 45572446133243,
  },
  {
    0: "Apple",
    1: "[ˈæpl]",
    2: "사과",
    3: "an apple pie",
    4: "사과 파이",
    5: false,
    id: 324541325441235,
  },
];

// set reducer
const CREATE = "word/CREATE";
const READ = "word/READ";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";

const wordReducer = (state = initWordData, action = {}) => {
  switch (action.type) {
    case CREATE: {
      return console.log("CREATE 리듀서 스위치 케이스 입니다.");
    }
    case READ: {
      return console.log("READ 리듀서 스위치 케이스 입니다.");
    }
    case UPDATE: {
      console.log("UPDATE 리듀서 스위치 케이스 입니다.");
      state.indexOf(action);
      return state;
    }
    case DELETE: {
      return console.log("DELETE 리듀서 스위치 케이스 입니다.");
    }
    default:
      return state;
  }
};

// action function {type:..., action:...} 형식으로 바꿔주기
export const actionCreateFn = () => {
  return console.log("actionCreate 입니다. 리듀서로 무엇을 보낼까요?");
};
export const actionReadFn = () => {
  return console.log("actionReadFn 입니다. 리듀서로 무엇을 보낼까요?");
};
export const actionUpdateFn = (action) => {
  console.log("actionUpdate 입니다. 리듀서로 무엇을 보낼까요?");
  return { type: UPDATE, action: action };
};
export const actionDeleteFn = () => {
  return console.log("actionDelete 입니다. 리듀서로 무엇을 보낼까요?");
};

export default wordReducer;
