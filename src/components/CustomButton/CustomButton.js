/* eslint-disable react/button-has-type */
import React from "react"
import PropTypes from "prop-types"
import "./CustomButton.scss"

function CustomButton({ id, name, type, title = "", onClick, icon = {}, className }) {
    return (
        <button type={type} id={id} name={name} onClick={onClick} className={className}>
            {icon || title}
        </button>
    )
}
CustomButton.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.object,
    className: PropTypes.string.isRequired,
}

CustomButton.defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    icon: null,
    type: "button",
    title: "",
}

export default CustomButton
