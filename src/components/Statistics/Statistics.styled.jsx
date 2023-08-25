import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: fit-content;
  margin: 0 auto;
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: fit-content;
  overflow: hidden;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  gap: 8px;
  padding: 5px 10px;
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  color: #ffffff;
  font-size: 12px;
`;

export const Percentage = styled.span`
  display: block;
  color: #ffffff;
  font-size: 18px;
`;

export const Title = styled.h2`
    font-weight: 600;
    text-align: center;
    color: #707070;
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 18px;
`