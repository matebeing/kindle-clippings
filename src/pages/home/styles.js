import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;
  gap: 2rem;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const KindleMockup = styled.img`
  width: 20rem;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  color: white;
  background-color: #336cff;
  border: none;
  border-radius: 0.3rem;
  padding: 1.2em;
  cursor: pointer;
  margin-top: 3rem; ;
`;

export const Path = styled.p`
  display: inline-block;
  background-color: #1c1c1c;
  color: white;
  text-align: center;
  padding: 0.5em;
  border-radius: 0.5rem;
  font-size: 0.8rem;
`;
