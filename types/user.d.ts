export interface IRoleInfo {
  roleName: string;
  value: string;
}
export interface IUser {
  id: string;
  name: string;
  role: IRoleInfo[];
}
