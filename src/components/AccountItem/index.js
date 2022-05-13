import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/234459315_608362170150007_1137897098069062897_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-6&_nc_sid=7206a8&_nc_ohc=9q4Hzj7FmSoAX8GXBgv&_nc_ht=scontent.fhan3-5.fna&oh=00_AT-UzbHdsoUHxm2jRPKtK2UX2eTO0c8beu8zFkz1mXFiVQ&oe=627F3780"
                alt="Hoaaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Vũ Đức Dũng</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>DunDun</span>
            </div>
        </div>
    );
}

export default AccountItem;
