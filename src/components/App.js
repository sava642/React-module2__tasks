
import { Recipe } from './Recipe/Recipe';
import recipes from '../recepies.json';
import Statistics from './Statistics/Statistics';
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
		total: 0,
		feedback: 100,
	}
	handleAmount = (e) => {
		let el = e.target.innerHTML.toLowerCase();
		this.setState((prevState) => ({
			[el]: prevState[el] + 1,
		}), this.countTotalFeedback)
	}

	countTotalFeedback = () => {
		this.setState({
			total: this.state.good + this.state.neutral + this.state.bad,
		}, this.countPositiveFeedbackPercentage)
	}

	countPositiveFeedbackPercentage = () => {
		this.setState({
			feedback: Math.floor(this.state.good / this.state.total * 100),
		})
	}



	render() {
		const { good, neutral, bad, total, feedback } = this.state

		return (
			<>
				<Section title="Please leave feetback">
					<FeedbackOptions
						// options={ }
						onLeaveFeedback={this.handleAmount}
						onCountTotalFeedback={this.countTotalFeedback}
					/>

				</Section>

				<Section title="Statistic">
					{this.state.total > 0 ? <Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						feedback={feedback}
					/> : <Notification message="There is no feedback"></Notification>}

				</Section>







				{
					// recipes.map((recipe, idx) => (
					// 	<Recipe key={idx} recipe={recipe} />
					// ))
				}
			</>
		);
	}
};
export default App;