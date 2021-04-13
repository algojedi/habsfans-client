import { ButtonSize, ButtonType } from '../../styles'

function Button({ handleClick, size, type, children }) {
    const classNames = ButtonType[type] + ' ' + ButtonSize[size]
    return (
        <button onClick={handleClick} className={classNames}>
            {children}
        </button>
    )
}
export default Button
