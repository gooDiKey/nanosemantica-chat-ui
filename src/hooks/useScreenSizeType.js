import { useState, useEffect } from "react";

export default function useScreenSizeType() {
    const getScreenSizeType = () => {
        let screenSizeType;

        if (window.innerWidth <= 768) {
            screenSizeType = 'mobile';
        } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
            screenSizeType = 'medium';
        } else if (window.innerWidth >= 1200) {
            screenSizeType = 'large';
        }

        return screenSizeType;
    }

    const [screenSizeType, setScreenSizeType] = useState(getScreenSizeType());
    
    useEffect(() => {
        const onResize = () => {
            setScreenSizeType(getScreenSizeType());
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    return screenSizeType;
}