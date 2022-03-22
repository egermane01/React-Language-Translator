/* eslint-disable react/button-has-type */
import React from "react"
import PropTypes from "prop-types"

function CustomButton({ id, name, type, title, onClick }) {
    return (
        <button type={type} id={id} name={name} onClick={onClick}>
            {title}
        </button>
    )
}
CustomButton.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default CustomButton
