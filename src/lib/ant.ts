import {
  Layout,
  Menu,
  Breadcrumb,
  Table,
  Pagination,
  Input,
  Popconfirm,
  Button,
  Modal,
  Form,
  Upload,
  DatePicker,
  Select,
  ConfigProvider,
  Drawer,
  Collapse,
  Tooltip,
  Radio,
  Switch,
  Slider,
  Dropdown
} from 'ant-design-vue';
import { App } from 'vue';

const ant = {
  install(Vue: App) {
    Vue.use(Layout);
    Vue.use(Menu);
    Vue.use(Breadcrumb);
    Vue.use(Table);
    Vue.use(Pagination);
    Vue.use(Input);
    Vue.use(Popconfirm);
    Vue.use(Button);
    Vue.use(Modal);
    Vue.use(Form);
    Vue.use(Upload);
    Vue.use(DatePicker);
    Vue.use(Select);
    Vue.use(ConfigProvider);
    Vue.use(Drawer);
    Vue.use(Collapse);
    Vue.use(Tooltip);
    Vue.use(Radio);
    Vue.use(Switch);
    Vue.use(Slider);
    Vue.use(Dropdown);
  }
};
export default ant;
