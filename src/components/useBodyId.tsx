import { useEffect } from 'react';

export function useBodyId(id: string) {
    useEffect(() => {
        document.body.id = id;
        return () => {
            document.body.id = '';
        };
    }, [id]);
}