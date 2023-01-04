export type HexType = `0x${string}`

export type ViewsKeyType = 'EXTENSIONS' | 'ACCOUNTS'
export type ViewsType = {
  [key in ViewsKeyType]: string
}

export type ExtensionKeyType = 'talisman' | 'polkadot-js' | 'subwallet-js'
export type ExtensionListType = {
  [key in ExtensionKeyType]: ExtensionItemType
}
export type ExtensionItemType = {
  name: string;
  logo: string;
  download_url: string;
  documentation_url: string;
};

declare global {
  interface Window {
    injectedWeb3: any
  }
}