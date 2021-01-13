import { GeotrekAPI } from 'services/api/client';
import { APIQuery } from 'services/api/interface';
import { RawTrekResults } from './interface';

const fieldsParams = {
  fields: 'departure,name,labels,duration,length_2d,ascent,difficulty',
};

export const fetchTrekResults = (query: APIQuery): Promise<RawTrekResults> =>
  GeotrekAPI.url('/trek')
    .query({ ...query, ...fieldsParams })
    .get()
    .json();
