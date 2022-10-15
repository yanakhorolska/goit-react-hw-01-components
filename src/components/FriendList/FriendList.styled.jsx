import styled from "styled-components";

export const IsOffline = styled.span`
display: block;
height: 12px;
width: 12px;
background-color: red;
border-radius: 50%
`;

export const IsOnline = styled.span`
display: block;
height: 12px;
width: 12px;
background-color: green;
border-radius: 50%
`;

export const ListItem = styled.li`
list-style: none;
display: flex;
align-items: center;
gap: 25px;
padding-left: 18px;
background-color: white;
border-radius: 8px;
box-shadow: 2px 2px 15px 8px #AFEEEE;
:not(:last-child) {
    margin-bottom: 15px;

}
`;

export const FriendsList = styled.ul`
    padding: 20px;
    width: 450px;
    margin: 0 auto;
    margin-top: 50px;
`;

export const FriendImage = styled.img`
    height: 50px;    
`;

export const FriendName = styled.p`
    font-size:25px;
`;