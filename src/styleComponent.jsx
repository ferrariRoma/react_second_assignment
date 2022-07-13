import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 4rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: antiquewhite;

  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    font-family: "Jua", sans-serif;
    letter-spacing: 0.5rem;
  }
`;

export const InputBodyStyled = styled.main`
  margin-top: 8rem;
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 30rem;
    height: 3rem;

    font-size: 1rem;

    margin-bottom: 2rem;

    border: none;
    border-bottom: 0.08rem solid rgba(0, 0, 0, 0.5);

    &:focus {
      outline: none;
      border-bottom: 0.2rem solid rgba(8, 112, 41, 1);
    }
  }

  button {
    margin-top: 3rem;

    width: 13rem;
    height: 3rem;

    border: none;
    border-radius: 2rem;

    cursor: pointer;

    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5rem;

    background-color: rgb(41 183 85);
  }
`;

export const BodyStyled = styled.main`
  margin-top: 8rem;
  width: 100%;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 10rem;
  gap: 1.2rem;
  justify-content: center;

  article.checked__word {
    background-color: rgba(8, 112, 41, 0.3);
  }
`;

export const WordContainerDivStyled = styled.article`
  padding: 1.3rem;
  position: relative;

  border: 3px solid rgba(8, 112, 41, 0.3);
  border-radius: 0.5rem;

  button {
    border: none;
    background: inherit;
    margin-right: 0.1rem;
  }

  div {
    display: flex;
    align-items: center;
  }
  div:first-child {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  div:nth-child(2) {
    display: block;
    p {
      margin-right: 0.3rem;
    }
  }

  p {
    margin-bottom: 0.2rem;
  }
  p.word {
    font-size: 2rem;
  }
  p.pronunciation {
    font-size: 1rem;
  }
  p.meaning {
    font-size: 1.2rem;
  }
  p.eg {
    font-size: 1rem;
    color: rgb(9, 132, 227);
  }
`;
