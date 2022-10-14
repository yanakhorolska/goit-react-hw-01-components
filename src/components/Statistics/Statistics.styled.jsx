import styled from "styled-components";

export const StatsCard = styled.section`
    width: 450px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 2px 2px 15px 8px #AFEEEE;
    background-color: #ffffff;
`;

export const Title = styled.h2`
color: grey;
    font-size: 30px;
    text-align: center;
    padding: 25px;
    margin: 0;
    
`;

export const StatLabel = styled.span`
    font-size: 17px;
`;

export const StatPercentage = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

export const StatList = styled.ul`
padding: 0;
margin: 0;
background-color: #fff000;
    list-style: none;
    display: flex;
    justify-content: space-between;
`;
export const StatItem = styled.li`
background-color: ${getRandomColor};
display: flex;
flex-direction: column;
align-items: center;
padding: 12px;
gap: 6px;
width: 100%;
`;

function getRandomColor()  {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};