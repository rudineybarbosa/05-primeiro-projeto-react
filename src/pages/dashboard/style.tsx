import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

// THIS IS A CONSTANT REFERENCING THE <h1> HTML TAG
export const TitleStyled = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;

  line-height: 56px;
  margin-top: 80px;
`;

export const FormStyled = styled.form<FormProps>`
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
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

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

export const ErrorStyled = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
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

    &:hover {
      transform: translateX(10px);
    }
    transition: transform 0.2s;

    img {
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }

    div {
      margin: 0px 16px;

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

    /* This is the arrow SVG icon FiChevronRight */
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    & + a {
      margin-top: 16px;
    }
  }
`;
