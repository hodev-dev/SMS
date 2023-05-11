import { useEffect, useRef } from 'react';

const useRenderCount = () => {
    const countRef = useRef(0);

    useEffect(() => {
        countRef.current += 1;
    });

    return countRef.current;
}

export default useRenderCount;