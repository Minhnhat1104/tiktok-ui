import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopWrapper } from '~/components/Propper';
import MenuItem from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopWrapper className={cx('menu-popper')}>
                        {items.map((item, index) => (
                            <MenuItem key={index} data={item} />
                        ))}
                    </PopWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
