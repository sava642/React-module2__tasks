import { Text, StatisticsItem, StatisticsList, StatisticsName, StatisticsAmount } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, feedback }) => {
	return (
		<>
			<Text>Statistics</Text>
			<StatisticsList>
				<StatisticsItem><StatisticsName>Good</StatisticsName><StatisticsAmount>{good}</StatisticsAmount></StatisticsItem>
				<StatisticsItem><StatisticsName>Neutral</StatisticsName><StatisticsAmount>{neutral}</StatisticsAmount></StatisticsItem>
				<StatisticsItem><StatisticsName>Bad</StatisticsName><StatisticsAmount>{bad}</StatisticsAmount></StatisticsItem>
				<StatisticsItem><StatisticsName>Total</StatisticsName><StatisticsAmount>{total}</StatisticsAmount></StatisticsItem>
				<StatisticsItem><StatisticsName>Positive feedback</StatisticsName><StatisticsAmount>{feedback}%</StatisticsAmount></StatisticsItem>
			</StatisticsList>
		</>
	)
}

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	feedback: PropTypes.number.isRequired,
};
export default Statistics;



