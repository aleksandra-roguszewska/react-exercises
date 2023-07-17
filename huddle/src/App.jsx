import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <h1>Hello world!</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
