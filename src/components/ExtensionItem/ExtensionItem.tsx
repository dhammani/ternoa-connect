import React, { useState } from "react";
import styles from "./styles";
import { IExtensionItem } from "./types";

export function ExtensionItem({
  name,
  logo,
  download_url,
  documentation_url,
  isExtensionInstalled,
  isExtensionEnabled,
  isActiveExtension,
}: IExtensionItem) {
  const [isHover, setIsHover] = useState(false);

  const download = () => {
    window.open(download_url);
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isActiveExtension ? "#3817B8" : isHover ? "rgba(56, 23, 184, 0.3)" : "#000"
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div style={styles.extensionInfo}>
        <img src={logo} style={styles.logo} />
        <h1 style={styles.extensionName}>
          {name}
        </h1>
      </div>
      {!isExtensionInstalled ? (
        <button
          style={styles.download}
          onClick={download}
        >
          Download
        </button>
      ) : null}
      {!isExtensionEnabled ? (
        <div style={styles.disabled}>
          Disabled
        </div>
      ) : null}
    </div>
  );
};
