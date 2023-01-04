import { ExtensionItemType } from '../../types'

export interface IExtensionItem extends ExtensionItemType {
  isExtensionInstalled: boolean
  isExtensionEnabled: boolean
  isActiveExtension: boolean
}
