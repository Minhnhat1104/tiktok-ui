import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '../Propper';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <h1 className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>Item preview</PopperWrapper>
            </h1>
        );
    };

    return (
        <Tippy interactive placement="bottom" delay={[1000, 1000]} render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/106264726_3048622825251565_80200888243500935_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=nZ1mjEb5Oc4AX9bgbYS&_nc_oc=AQnGE0D8hV-1LNb1TBQXJYTFoAioDQ_9xl-ydJHJwVhZ6_W9CGN5Buy2V7E7RWbiCtM&tn=9vt-iZhhD4DDT0XL&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9pKtETAzl-AojNVx1FSGqcDwWaLhyJV3d9zEi5kt7-wA&oe=6321B0A1"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>Minhnhat1104</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Le Minh Nhat</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
