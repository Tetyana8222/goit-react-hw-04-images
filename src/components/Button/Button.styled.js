import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background-color: #37b2d9;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #fff;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #0062cc;
    border-color: #005cbf;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
    box-shadow: none;
  }
`;
