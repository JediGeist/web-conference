export enum NavigationTypeEnum { Company, Leaders, Portfolio };

export interface INavigationItem {
  type: NavigationTypeEnum;
  text: string;
  isSelected: boolean;
  onClick(): void;
  isVisible(): boolean;
}