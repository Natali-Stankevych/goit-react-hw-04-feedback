import React from "react";
import PropTypes from "prop-types";
import { Text } from "./Massages.styled";

export const Messsages = ({ message }) => {
    return <Text >{message}</Text>
};

Messsages.propTypes = {
    message: PropTypes.string.isRequired,
}