export interface IUserDropdownItem {
  text?: string;
  isDisabled(): boolean;
  isVisible(): boolean;
  onClick(): void;

  isSeparator?: boolean;
}