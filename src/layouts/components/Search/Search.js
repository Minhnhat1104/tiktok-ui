import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounded = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounded.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounded)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         console.log(res);
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounded, 'less');
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debounded]);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ')) return;

        setSearchValue(searchValue);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PropWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="Value"
                        value={searchValue}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <SearchIcon width={'2.4rem'} height={'2.4rem'} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
