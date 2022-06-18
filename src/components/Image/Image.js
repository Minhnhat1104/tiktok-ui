import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';
import images from '~/assets/imgs';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

// Image.propTypes = {
//     src: PropTypes.string,
//     alt: PropTypes.string,
//     className: PropTypes.string,
// };

export default forwardRef(Image);
