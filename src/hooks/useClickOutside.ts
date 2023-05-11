import { useEffect } from 'react';

function useOutsideClick(ref, callback, dependency) {

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, ref, ...dependency]);

    function handleClickOutside(event) {
        if (ref !== null && ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    }
}

export default useOutsideClick;
