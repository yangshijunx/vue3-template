export interface GlobalState {
  token: string;
  userInfo: any;
}
/* tab菜单栏 */
export interface TabsMenuProps {
  icon: string;
  title: string;
  path: string;
  name: string;
  close: boolean;
}
export interface TabsState {
  tabsMenuList: TabsMenuProps[];
}

// 权限相关
export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
}
