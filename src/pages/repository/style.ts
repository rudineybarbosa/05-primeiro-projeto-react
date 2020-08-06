import styled from 'styled-components';

export const HeaderPage = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const SectionRepositoryInfo = styled.section`
  margin-top: 80px;
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 40px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
`;

export const RepositoryHeader = styled.header`
  margin-top: 40px;
  list-style: none;

  ul {
    display: flex;

    li {
      display: block;

      & + li {
        margin-left: 80px;
      }

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const DivIssues = styled.div`
  margin-top: 80px;

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
