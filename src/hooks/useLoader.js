import { useEffect } from "react";

export default function useLoader(setIsLoading) {
    useEffect(() => {
        setIsLoading(false);
    return () => {
        setIsLoading(true);
    }
    }, [])
}