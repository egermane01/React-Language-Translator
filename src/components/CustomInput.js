import React from "react"
import PropTypes from "prop-types"

function CustomInput({ id, name, rows, cols, onChange, value }) {
    return <textarea id={id} name={name} rows={rows} cols={cols} onChange={onChange} value={value} />
}

CustomInput.propTypes = {
    rows: PropTypes.string.isRequired,
    cols: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default CustomInput
