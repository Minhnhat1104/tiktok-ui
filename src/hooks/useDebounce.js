import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebounceedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
