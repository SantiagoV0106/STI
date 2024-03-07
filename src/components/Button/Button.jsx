/* eslint-disable react/prop-types */
export function Button({ type, label, click, disabled }) {
    return (
        <button type={type} onClick={click} disabled={disabled} >{label}</button>
    )
}