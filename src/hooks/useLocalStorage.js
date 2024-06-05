import { useState, useEffect } from "react"

const useLocalStorage = (storageKey, defaultValue) => {
    const getValue = localStorage.getItem(storageKey);
    const initialValue = JSON.parse(getValue) || defaultValue;
    const [value, setValue] = useState( initialValue );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
}

export default useLocalStorage
