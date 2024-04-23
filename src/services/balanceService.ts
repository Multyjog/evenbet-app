import apiClient from "../api-client";
import { IBalanceObject, IFormattedBalance } from "../interfaces";

export const balance = async () => {
  apiClient
    .get("/users/me/balance", {
      params: { auth: localStorage.getItem("authToken") },
    })
    .then((res) => {
      console.log("BALANCE:", res);
      return "s";
    });
  return "";
};

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
