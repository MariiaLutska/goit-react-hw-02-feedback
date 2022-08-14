// import {Statistics} from './Statistics';

import styled from "styled-components";
import { Box } from './Box';


const Text = styled.p`
color: ${p => p.theme.colors.accent};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.l}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
`;

export const App = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" as="main" >
      <Box bg="primary" as="section">
        <Text>
        Please leave feedback
      </Text>
      </Box>
      <Box bg="blu" as="section">
        <>Good </>
        <>Neutral </>
        <>Bad </>
      </Box>
      <Box bg="primary" as="section">
        <Text>
          Statistics
        </Text>
      </Box>
      </Box>
  );
};
{/* 
// export class Statistics extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
//     render() {
//         return (
//             <div>
//                 <Section title="Please leave feedback">
//                     <FeedbackOptions options={Object.keys(this.state)} addFeedback={this.addFeedback} />
//                 </Section>
                
//                 <Section title="Statistics">
//                     {this.countTotalFeedback() ?
//                         (<Statistics {...this.state} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} />) :
//                         (<Notification message="No feedback given" />)
//                     }
//                 </Section>
//                 <Button>Good</Button>
//             <Button>Neutral</Button>
//             <Button>Bad</Button>
//             </div>
        
//         );
//     };
// };

// export default Feedback; */}