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

export const BodyStyled = styled.main`
  margin-top: 8rem;
  width: 100%;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 10rem;
  gap: 1.2rem;
  justify-content: center;
`;

export const WordContainerDivStyled = styled.article`
  padding: 1.3rem;
  position: relative;
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
    p {
      margin-right: 0.3rem;
    }
  }

  p {
    margin-bottom: 0.7rem;
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
