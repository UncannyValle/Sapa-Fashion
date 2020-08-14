import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
  height: auto;
  .image-cart {
    width: 100px;
    img {
      width: 100%;
      height: auto;
    }
  }
  p {
    width: 100px;
  }
  button {
    background: #25ccde;
    border-radius: 50px;
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 200ms ease-in-out;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      cursor: pointer;
    }
  }
`
