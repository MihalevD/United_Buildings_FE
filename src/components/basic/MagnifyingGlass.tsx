import styled from '@emotion/styled';

const Name = styled.div`
  font-size: 5em;
  display: inline-block;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid black;
  position: relative;
  border-radius: 0.35em;
  margin-top: 10px;
  margin-left: 25px;

  ::before {
    content: '';
    display: inline-block;
    position: absolute;
    right: -0.25em;
    bottom: -0.1em;
    border-width: 0;
    background: black;
    width: 0.35em;
    height: 0.08em;
    transform: rotate(45deg);
  }
`;

export const MagnifyingGlass = () => {
  return <Name></Name>;
};
