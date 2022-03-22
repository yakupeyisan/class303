export interface Response{
  success:boolean,
  message:string
}
export interface DataResponse<T> extends Response{
  data:T
}
