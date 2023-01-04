import type { InjectedExtension } from '@polkadot/extension-inject/types';
import { EXTENSIONS_LIST } from "../../constants";
import { useTernoaConnect } from "../../hooks/useTernoaConnect";
import { ExtensionKeyType } from "../../types";
import { ExtensionItem } from "../ExtensionItem";
import styles from "./styles";

export function ExtensionList() {
  const {
    extensions,
    currentActiveExtension
  } = useTernoaConnect()

  return (
    <div style={styles.container}>
      {
        Object.keys(EXTENSIONS_LIST).map((key) => {
          const extensionKey = key as ExtensionKeyType;

          const isExtensionInstalled = window?.injectedWeb3?.hasOwnProperty(key);
          const isExtensionEnabled = extensions?.some((extension: InjectedExtension) => extension.name === key) || false;
          const isActiveExtension = currentActiveExtension?.name === key || false;

          return (
            <div key={extensionKey}>
              <ExtensionItem
                logo={EXTENSIONS_LIST[extensionKey].logo}
                name={EXTENSIONS_LIST[extensionKey].name}
                download_url={EXTENSIONS_LIST[extensionKey].download_url}
                documentation_url={EXTENSIONS_LIST[extensionKey].documentation_url}
                isExtensionInstalled={isExtensionInstalled}
                isExtensionEnabled={isExtensionEnabled}
                isActiveExtension={isActiveExtension}
              />
            </div>
          )
        })
      }
    </div>
  )
}