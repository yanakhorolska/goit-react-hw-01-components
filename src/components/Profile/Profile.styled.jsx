import styled from "styled-components";


export const UserStats = styled.ul`
    display: flex;
    list-style:none;
    padding: 0;
    border-top: 1px solid #C0C0C0;
    background-color: #DCDCDC;
    
`;
export const UserStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: calc(100% / 3);
    gap: 6px;
    :not(:last-child) {
        border-right: 1px solid #C0C0C0;
    }
`;

export const UserStatsLabel = styled.span`
    font-size: 18px;
`;


export const UserStatsQuantity = styled.span`
    font-weight: 700;
    font-size: 20px;
`;


export const UserCard = styled.div`

    width: 450px;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 2px 2px 15px 8px #AFEEEE;
`;


export const UserDescription = styled.div`
    padding-top: 30px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const UserImage = styled.img`
    margin-bottom: 20px;
    width: 200px;
    background-color: #AFEEEE;
    border-radius: 50%;
`;

export const UserName = styled.p`
    margin: 0;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;

`;

export const UserTag = styled.p`
    margin: 0;
    margin-bottom: 20px;
    font-size: 20px;
    color: grey;
`;

export const UserLocation = styled.p`
    margin: 0;
    font-size: 25px;
    color: grey;
`;

