import React from "react"
import PropTypes from "prop-types"

function CustomOutput({ id, name, rows, cols, value }) {
    return <textarea id={id} name={name} rows={rows} cols={cols} value={value} disabled />
}

CustomOutput.propTypes = {
    rows: PropTypes.string.isRequired,
    cols: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}
export default CustomOutput
