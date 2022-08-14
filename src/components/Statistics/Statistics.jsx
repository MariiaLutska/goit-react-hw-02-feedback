import { render } from '@testing-library/react';
import styled from "styled-components";

export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} addFeedback={this.addFeedback} />
                </Section>
                
                <Ssection title="Statistics">
                    {this.countTotalFeedback() ?
                        (<Statistics {...this.state} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} />) :
                        (<Notification message="No feedback given" />)
                    }
                </Ssection>
                {/* <Button>Good</Button>
            <Button>Neutral</Button>
            <Button>Bad</Button> */}
            </div>
        
        );
    };
};