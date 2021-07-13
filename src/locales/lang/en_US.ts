import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/en_US';
// import momentLocale from 'moment/dist/locale/zh-cn';

const modules = import.meta.globEager('./en_US/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'en_US'),
    antdLocale
  }
  // momentLocale,
  // momentLocaleName: 'eu'
};
