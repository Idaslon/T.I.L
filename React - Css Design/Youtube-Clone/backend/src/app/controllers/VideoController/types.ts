import { Request, RequestBody, RequestParamsId } from '~/types';

interface Body {
  relativePath: string;
}

export type StoreRequest = RequestBody<Body>;
export type IndexRequest = Request;
export type ShowRequest = RequestParamsId;
export type DeleteRequest = RequestParamsId;
