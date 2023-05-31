// pages/index.js
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 4rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LandingPage = () => {
  return (
    <Container>
      <div>
        <Title>Welcome to My Web3 Site</Title>
        <Subtitle>Explore the possibilities of Web3 technology.</Subtitle>
        <Button>Get Started</Button>
      </div>
    </Container>
  );
};

export default LandingPage;