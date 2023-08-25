import styled from '@emotion/styled';

export const FriendListSection = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 250px;
  margin: 0 auto;
  padding: 0;
`;

export const Friend = styled.li`
  display: flex;
  gap: 8px;
  justify-content: left;
  background-color: #eeeeee;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 5px;
  border: 1px solid #d6d6d6;
  align-items: center;
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ status }) => `background-color: ${status ? '#4cff00' : '#ff2400'}`};
  }
  img {
    width: 40px;
  }
`;
