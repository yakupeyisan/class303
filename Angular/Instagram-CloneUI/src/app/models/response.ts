export interface Response{
  success:boolean,
  message:string
}
export interface DataResponse<T> extends Response{
  data:T
}
export interface AccessToken{
  token:string
  expiration:Date

}
export interface User{
  id:string
  userName:string
  fullName:string
  status:boolean

}
