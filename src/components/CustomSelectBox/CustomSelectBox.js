/* eslint-disable react/button-has-type */
import React from "react"
import PropTypes from "prop-types"
import "./CustomSelectBox.scss"

function CustomSelectBox({ id, options, name, onChange, className, value }) {
    return (
        <select id={id} name={name} onChange={onChange} className={className} value={value}>
            <option value="0">Select</option>
            {options.map(item => (
                <option key={item.name} value={item.code}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}

CustomSelectBox.propTypes = {
    value: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
}

CustomSelectBox.defaultProps = {
    className: "",
}

export default CustomSelectBox
