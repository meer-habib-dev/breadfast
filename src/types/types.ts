export interface PostTypes {
  body: string;
  id: number;
  title: string;
  user_id: number;
}
export interface commentTypes {
  body: string;
  id: number;
  post_id: number;
  name: string;
  email: string;
}
export interface userTypes {
  email: string;
  gender: string;
  id: number;
  name: string;
  status: string;
}
