import { defHttp } from '@/utils/http/Axios/index';
import { IUser } from '/#/user';

enum Api {
  GetUserInfo = '/getUserInfo'
}

export function getUserInfo() {
  return defHttp.get<IUser>({ url: Api.GetUserInfo });
}
