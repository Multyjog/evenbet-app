export interface IBalanceObject {
  id: string;
  type: string;
  attributes: {
    currency: string;
    available: number;
    "in-play": string;
    bonus: number;
  };
}
export interface IFormattedBalance {
  id: string;
  currency: string;
  balance: number;
}
