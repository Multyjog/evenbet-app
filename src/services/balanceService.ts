import { IBalanceObject, IFormattedBalance } from "../interfaces";

export const formatBalances = (balancesArr: IBalanceObject[]) => {
  const newBalances: IFormattedBalance[] = [];
  balancesArr.forEach((element) => {
    newBalances.push({
      id: element.id,
      currency: element.attributes.currency,
      balance: element.attributes.available,
    });
  });
  return newBalances;
};
