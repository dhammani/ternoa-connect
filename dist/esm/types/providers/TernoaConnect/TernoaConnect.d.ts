/// <reference types="react" />
import { ITernoaConnectProvider, TernoaConnectContextType } from './TernoaConnect.types';
export declare const TernoaConnectContext: import("react").Context<TernoaConnectContextType>;
export declare function TernoaConnectProvider({ children }: ITernoaConnectProvider): JSX.Element;
