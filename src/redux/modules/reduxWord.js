// firebase config
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "@firebase/firestore";

// 0: word, 1: pronunciation, 2: meaning, 3: eg, 4: trasition, 5: checked, 6: id
export const initWordData = [];

// set reducer
const CREATE = "word/CREATE";
const READ = "word/READ";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";
const LOAD_FIRESTORE_DATA = "word/READ_DATA";

const wordReducer = (state = initWordData, action = {}) => {
  switch (action.type) {
    case CREATE: {
      // const newState = [...state, action.action];
      // console.log(newState);
      return state;
    }
    case READ: {
      return console.log("READ 리듀서 스위치 케이스 입니다.");
    }
    case UPDATE: {
      const legacyState = [...state];
      const new_Data = legacyState.map((el, i) =>
        action.index === i ? action.modifiedData : el
      );
      return new_Data;
    }
    case DELETE: {
      return console.log("DELETE 리듀서 스위치 케이스 입니다.");
    }
    case LOAD_FIRESTORE_DATA: {
      const loadedWords = [];
      action.firestoreData.forEach((el) =>
        loadedWords.push({ ...el.data(), id: el.id })
      );
      return [...loadedWords];
    }
    default:
      return state;
  }
};

// action function {type:..., action:...} 형식으로 바꿔주기
export const actionCreateFn = (action) => {
  return { type: CREATE, action };
};
export const actionReadFn = () => {
  return console.log("actionReadFn 입니다. 리듀서로 무엇을 보낼까요?");
};
export const actionUpdateFn = (index, modifiedData) => {
  return { type: UPDATE, index, modifiedData };
};

export const actionDeleteFn = () => {
  return console.log("actionDelete 입니다. 리듀서로 무엇을 보낼까요?");
};
// firestore action function
export const loadDataFn = (firestoreData) => {
  return { type: LOAD_FIRESTORE_DATA, firestoreData };
};

// set firestore middleware thunk
export const FBActionFn = () => {
  return async function (dispatch) {
    const dictionaryData = await getDocs(collection(db, "dictionary"));
    dispatch(loadDataFn(dictionaryData));
  };
};
export const FBActionUpdateFn = (state) => {
  return async function (dispatch, getState) {
    const searchFB = doc(db, "dictionary", state.id);
    const resultFB = (await getDoc(searchFB)).data();
    const modifiedData = { ...resultFB, ...state };
    await updateDoc(searchFB, modifiedData);
    const index = getState().reducer.findIndex((el) => el.id === state.id);
    dispatch(actionUpdateFn(index, modifiedData));
  };
};

export const FBActionCreateFn = (state) => {
  return async function (dispatch) {
    const getNewWord = { ...state };
    const newWord = await addDoc(collection(db, "dictionary"), getNewWord);
    const processNewWord = await getDoc(newWord);
    const newWord_Id = { id: processNewWord.id, ...processNewWord.data() };
    dispatch(actionCreateFn(newWord_Id));
  };
};

export default wordReducer;
