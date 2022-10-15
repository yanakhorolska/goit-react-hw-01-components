import styled from "styled-components";

export const Table = styled.table`
    width: ${p => p.theme.sizes.width.table};
    margin: ${p => p.theme.space.m.mAuto};
    margin-top: ${p => p.theme.space.mt};
    box-shadow: ${p => p.theme.shadows.one};
    background-color: ${p => p.theme.colors.bg};
`;

export const TableHead = styled.thead``;

export const TableHeadItems = styled.tr``;

export const TableHeadItem = styled.th`
background-color: ${p => p.theme.colors.tableHead};
padding: ${p => p.theme.space.p.m};
width: ${p => p.theme.sizes.width.element};
font-size: ${p => p.theme.fontSizes.l};`;

export const TableBody = styled.tbody``;

export const TableBodyItems = styled.tr``;

export const TableBodyItem = styled.td`
text-align: ${p => p.theme.textAlign};
font-size: ${p => p.theme.fontSizes.m};
padding: ${p => p.theme.space.p.s};
background-color: ${p => p.theme.colors.bgEl};`;
