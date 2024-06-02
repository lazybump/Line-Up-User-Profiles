import styled from "styled-components";

export const ProfileStyles = styled.article`
  background-color: rgb(240, 240, 240);
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 auto;
  font-size: 0.7rem;
  padding: 1rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  gap: 3rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    max-width: 600px;
    flex-direction: row;
  }
`;

export const ImageStyles = styled.img`
  border-radius: 50%;
  max-width: 128px;
`;

export const TextContainer = styled.div`
  line-height: 2;
`;
