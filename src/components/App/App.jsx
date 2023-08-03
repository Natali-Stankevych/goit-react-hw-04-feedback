// import React, { Component } from "react";
import { useState } from "react";
import { Container } from "./App.styled";

import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Sections/Section";
import { Statistics } from "../Statistics/Statistics";
import { Messsages } from "../Massages/Massages";




export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case "good":
        setGood(prevGood => prevGood + 1);
        break;
      
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
     return Math.round((good / total) * 100) || 0;
  }

  const stateNames = Object.keys({ good, neutral, bad });
 const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage();
  
  return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={stateNames}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Messsages message="There is no feedback" />
          )}
        </Section>
      </Container>
    );


}

// export class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0

//     };
//      onLeaveFeedback = state => {
//     this.setState(prevState => ({ [state]: prevState[state] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100) || 0;
//   };

//    render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback();
//     const totalPercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={stateNames}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={totalPercentage}
//             />
//           ) : (
//             <Messsages message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }



