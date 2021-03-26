import { Link } from 'react-router-dom';
import classNames from 'classnames';

const ButtonSquare = ({ onClick, className, children }) => {
    return (
        <Link
            className={classNames('button-square', className)}
            onClick={onClick}
            to="/shop_react/cart">
            {children}
        </Link>
    );
};

export default ButtonSquare;
