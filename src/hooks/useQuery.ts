import api from '@/api/apiConfig';
import { delay } from '@/app/delay';
import { useAppDispatch } from '@/app/hooks';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';

interface useQueryResponse {
    data: any;
    isLoading: boolean;
    error: String | null;
    setData: any,
    fetch: any,
    setIsLoading: any,
    authorized: boolean
}

type useQueryHook<T> = [
    useQueryResponse
];

export default function useQuery<T>(initialUrl: string): useQueryResponse {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(true);
    const [error, setError] = useState<String | null>(null);
    const dispatch = useAppDispatch();

    const fetch = async (_url?: string, config?: AxiosRequestConfig,) => {
        await delay(200);
        setError(null);
        const URL = _url != undefined || _url != null ? _url : initialUrl;
        return new Promise(async (resolve, reject) => {
            setIsLoading(true);
            try {
                await delay(500);
                const response: AxiosResponse<T> = await api.v1({ ...config, method: "GET", url: '/' + URL });
                setIsLoading(false);
                if ((response.data as any).errors.length != 0) {
                    setError((response.data as any).errors);
                    throw Error("test")
                }
                setData(response?.data);
                resolve(response);
            } catch (error: any) {
                setIsLoading(false);
                if (error.response) {
                    if (error.response.status == 403) {
                        setAuthorized(false);
                    }
                    if (error.response.status == 401) {
                        setAuthorized(false);
                    }
                } else if (error.request) {
                    setError("request error");
                } else {
                    setError("default error");
                }
                reject(error);
            }
        });
    };

    return { data, isLoading, error, authorized, setData, fetch, setIsLoading };
}
