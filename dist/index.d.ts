/// <reference types="react" />
import { InjectedExtension, InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { WaitUntil, SubmitTxBlockingType } from 'ternoa-js';
import * as react from 'react';

declare function ConnectButton(): JSX.Element;

interface IModal {
    isModalVisible: boolean;
}

declare function Modal({ isModalVisible }: IModal): JSX.Element | null;

declare type HexType = `0x${string}`;
declare type ViewsKeyType = 'EXTENSIONS' | 'ACCOUNTS';
declare type ViewsType = {
    [key in ViewsKeyType]: string;
};
declare type ExtensionKeyType = 'talisman' | 'polkadot-js' | 'subwallet-js';
declare type ExtensionListType = {
    [key in ExtensionKeyType]: ExtensionItemType;
};
declare type ExtensionItemType = {
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

interface ITernoaConnectProvider {
    children: React.ReactNode;
}
declare type TernoaConnectContextType = {
    isAccountConnected: boolean;
    extensions: InjectedExtension[] | null;
    currentActiveExtension: InjectedExtension | null;
    accounts: InjectedAccountWithMeta[] | null;
    currentActiveAccount: InjectedAccountWithMeta | null;
    connect: () => void;
    toggleModal: () => void;
    selectNewActiveAccount: (_account: InjectedAccountWithMeta) => void;
    sign: (txHex: HexType) => void | Promise<HexType>;
    signAndSubmit: (txHex: HexType, waitUntil?: WaitUntil) => void | Promise<SubmitTxBlockingType>;
};

declare const TernoaConnectContext: react.Context<TernoaConnectContextType>;
declare function TernoaConnectProvider({ children }: ITernoaConnectProvider): JSX.Element;

declare function useTernoaConnect(): TernoaConnectContextType;

export { ConnectButton, ExtensionItemType, ExtensionKeyType, ExtensionListType, HexType, IModal, ITernoaConnectProvider, Modal, TernoaConnectContext, TernoaConnectContextType, TernoaConnectProvider, ViewsKeyType, ViewsType, useTernoaConnect };
