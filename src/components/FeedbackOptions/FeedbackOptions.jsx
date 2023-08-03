import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Button } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrapper>
            {options.map(option => (
                <Button
                    key={option}
                    typo="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            ))}
        </Wrapper>
    );
    
};
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequered).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};