import React, { Component } from 'react';

import {Statistics} from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {Notification} from './Notification/Notification';

// import styled from "styled-components";
import { Box } from './Box';


// const Section = styled.p`
// color: ${p => p.theme.colors.accent};
// font-family: ${p => p.theme.fonts.body};
// font-size: ${p => p.theme.fontSizes.l}px;
// padding-top: ${p => p.theme.space[4]}px;
// padding-bottom: ${p => p.theme.space[4]}px;
// `;

export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  };

  handleClick = name => {
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    if (total === 0) {
      return 0;
    } else {
      return Math.trunc((this.state.good / total) * 100);
    }
  }; 

  render() {
   return (
    // <Box display="flex" justifyContent="center" flexDirection="column" as="main" >
     <Box
       display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       border="normal"
       background="lightyellow"
     width="50%">
       <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
       </Section>
       
      <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
       </Section>
     </Box>
      
      //  </Box>
        );
 }
}
     