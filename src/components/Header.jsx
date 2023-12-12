import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => {
return (
    <React.Fragment>
        <h1>Word Guess </h1>
        <button onClick={() => props.newGame()}>New Game!</button>
    </React.Fragment>
)
}

Header.propTypes = {
    newGame: PropTypes.func,
}
export default Header;