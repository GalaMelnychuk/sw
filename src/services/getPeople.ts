import {AxiosHeaders} from 'axios';
import {api} from './api';
import {StarWarsPerson} from '../features/peopleSlice';

interface Response {
  config: any;
  data: {
    count: number;
    next: string;
    previous: any;
    results: StarWarsPerson[];
  };
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export const getPeople = async (page?: number): Promise<Response> => {
  const response: Response = await api.get('people', {
    params: {
      page,
    },
  });

  return response;
};
