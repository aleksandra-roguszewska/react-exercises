import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ bg }) => bg};
  padding: 40px 0;

  h1 {
    color: red;
  }

  &:hover {
    background-color: blue;
  }
`;

// export const StyledHeader = styled.header`
//   Propsy w styled-components
//   background-color: ${(props) => props.bg};
//   Propsy w styled components z destrukturyzacją
//   background-color: ${({ bg }) => bg};
//   padding: 40px 0;

//   h1 {
//     color: red;
//   }

//   &:hover {
//     background-color: blue;
//   }
// `;
