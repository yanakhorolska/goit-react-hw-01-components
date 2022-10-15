import PropTypes from 'prop-types';
import { StatsCard, Title, StatList, StatLabel, StatItem, StatPercentage } from './Statistics.styled';


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
Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}))
}