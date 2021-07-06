interface IPackage {
  packageName: string;
  url: string;
}
export interface ICDN {
  css: Array<string>;
  js: Array<IPackage>;
}
