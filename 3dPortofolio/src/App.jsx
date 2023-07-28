import styled from "styled-components";
import { Contact } from "./components/Contact";
import  Hero  from "./components/Hero";
import { Who } from "./components/Who";
import { Works } from "./components/Works";



const Container = styled.div`
  height: 100vh;
  /* font-family: Pricedown; */
  /* font-size: 70px; */
  font-family:pricedown;
  font-weight: bold;
  font-size: 20px;

  /* -webkit-text-stroke: 1px white; */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/gta1.jpg");
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }
  
`;

function App() {
  return (
    <Container >
      <Hero />
      <Who />
      <Works />
      <Contact  />
    </Container>
  );
}

export default App;
