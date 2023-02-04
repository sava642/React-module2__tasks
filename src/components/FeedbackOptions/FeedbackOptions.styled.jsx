import styled from "styled-components"

export const Button = styled.button`
background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
	 :not(:last-child) {
		margin-right: 8px
	};
	:hover{
		background-color: red; 
	}
`;
export const Wrapper = styled.div`
padding-left: 10px
`;
export const StatisticsName = styled.span`
font-size: 20px;
	font-weight: 600;
:after {
	content: ":"; 
	padding-right: 8px;
`;
export const StatisticsItem = styled.li`
display: inline-block;
padding: 5px 0px;
`;
export const StatisticsList = styled.ul`
display:flex;
flex-direction: column;
padding-inline-start: 0px;
`;
export const StatisticsAmount = styled.span`
font-size: 20px;
	font-weight: 600;
`;


