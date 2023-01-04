export declare type HexType = `0x${string}`;
export declare type ViewsKeyType = 'EXTENSIONS' | 'ACCOUNTS';
export declare type ViewsType = {
    [key in ViewsKeyType]: string;
};
export declare type ExtensionKeyType = 'talisman' | 'polkadot-js' | 'subwallet-js';
export declare type ExtensionListType = {
    [key in ExtensionKeyType]: ExtensionItemType;
};
export declare type ExtensionItemType = {
    name: string;
    logo: string;
    download_url: string;
    documentation_url: string;
};
declare global {
    interface Window {
        injectedWeb3: any;
    }
}
