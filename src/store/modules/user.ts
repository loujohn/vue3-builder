import { defineStore } from 'pinia';
import { store } from '@/store';
import { IUser } from '/#/user';
export const useUserStore = defineStore({
  id: 'user',
  state: (): IUser => ({
    id: '',
    name: '',
    role: ''
  })
});
export function useUserStoreWithOut() {
  return useUserStore(store);
}
