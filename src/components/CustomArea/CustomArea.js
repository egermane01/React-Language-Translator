import React from "react"
import PropTypes from "prop-types"
import "./CustomArea.scss"

function CustomArea({ type, id, name, rows, cols, onChange, value, controls = null, disabled = false }) {
    return (
        <div className={`custom${type}-container`}>
            <textarea className={`custom-${type}`} id={id} name={name} rows={rows} cols={cols} onChange={onChange} value={value} disabled={disabled} />
            {controls}
        </div>
    )
}

CustomArea.propTypes = {
    rows: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cols: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    controls: PropTypes.func,
    disabled: PropTypes.bool,
}

CustomArea.defaultProps = {
    controls: null,
    disabled: false,
}

export default CustomArea
