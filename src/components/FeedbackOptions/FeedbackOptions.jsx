import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, onCountTotalFeedback }) => {
	return (
		<>
			<Button onClick={(e) => onLeaveFeedback(e)}>Good</Button>
			<Button onClick={(e) => onLeaveFeedback(e)}>Neutral</Button>
			<Button onClick={(e) => onLeaveFeedback(e)}>Bad</Button>
		</>
	)
}
export default FeedbackOptions;

