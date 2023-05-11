import api from '@/api/apiConfig';
import { useAppDispatch } from '@/app/hooks';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface UseMutationResponse<T> {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
    controller: any,
    isSuccssfull: boolean
}

type UseMutationHook<T> = [
    (data?: any, url?: string, config?: AxiosRequestConfig) => Promise<void>,
    UseMutationResponse<T>,
];

export default function useMutation<T>(url: string, config?: AxiosRequestConfig): UseMutationHook<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [isSuccssfull, setIsSuccessfull] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [abortController, setAbortController] = useState<AbortController>(new AbortController());

    useEffect(() => {
        if (abortController.signal.aborted == true) {
            regenerateCancelToken();
        }
    }, [abortController.signal.aborted])

    const regenerateCancelToken = () => {
        setAbortController(new AbortController());
    }

    const fetchData: any = async (requestData: any, _url?: string): Promise<any> => {
        const URL = _url != undefined || _url != null ? _url : url;
        setIsLoading(true);
        setError(null);
        try {
            const response: AxiosResponse<T> = await api.v1({ ...config, signal: abortController.signal, url: URL, data: requestData });
            setData(response.data);
            if ((response.data as any).errors.length != 0) {
            } else {
                setIsSuccessfull(true);
            }
            return new Promise((resolve: any) => resolve(response));
        } catch (err: any) {
            if (axios.isCancel(err)) {
                console.log("cancel");
            } else {
            }
        }
        setIsLoading(false);
    };
    return [fetchData, { data, isLoading, error, controller: abortController, isSuccssfull }];
}

