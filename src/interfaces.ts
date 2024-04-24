export interface IBalanceObject {
  id: string;
  attributes: {
    currency: string;
    available: number;
  };
}
export interface IFormattedBalance {
  id: string;
  currency: string;
  balance: number;
}
export interface IGame {
  id: "544816";
  attributes: {
    title: string;
    image: "https://caletaholdings.com/staging/astrowild/assets/game/lobby/icon.jpg";
  };
}
