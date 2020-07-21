import styled from 'styled-components';
import { shade } from 'polished';
// THIS IS A CONSTANT REFERENCING THE <h1> HTML TAG
export const TitleStyled = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;

  line-height: 56px;
  margin-top: 80px;
`;

export const FormStyled = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0px 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &:placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const DivRepositoriesStyled = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 50px 50px 50px 50px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    img {
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    & + a {
      margin-top: 16px;
    }
  }
`;
