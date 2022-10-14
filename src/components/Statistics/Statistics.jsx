import {StatsCard, Title, StatList, StatLabel, StatItem, StatPercentage } from './Statistics.styled';


export const Statistics = ({title, stats}) => {
    return (
        <StatsCard>
            {{ title } && <Title>{title}</Title>}

        <StatList>
            {stats.map(item => (
                <StatItem key={item.id}>
                <StatLabel>{item.label}</StatLabel>
                <StatPercentage>{item.percentage}%</StatPercentage>
                </StatItem>
            ))}
        </StatList>
</StatsCard>
    )
};
