import { useState } from "react";

import styles from "./styles";
import Identicon from "@polkadot/react-identicon";
import { IAccountItem } from "./types";
import { EXTENSIONS_LIST } from "../../constants";
import { ExtensionKeyType } from "../../types";

export function AccountItem({
  account,
  selectActiveAccount,
  isActiveAccount
}: IAccountItem) {

  const [isHover, setIsHover] = useState(false);

  const extensionKey = account?.meta.source as ExtensionKeyType;

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isActiveAccount ? "#3817B8" : isHover ? "rgba(56, 23, 184, 0.3)" : "#000"
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => selectActiveAccount(account)}
    >
      <div style={styles.accountInfo}>
        <Identicon size={32} value={account.address} theme={'substrate'} />
        <h1 style={styles.accountName}>
          {account?.meta.name}
        </h1>
      </div>
      <img src={EXTENSIONS_LIST[extensionKey].logo} style={styles.extensionLogo} />
    </div>
  )
}
