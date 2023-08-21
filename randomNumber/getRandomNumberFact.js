import { getRandomNumberFactService } from "./getRandomNumberFactService.js";

export const getRandomNumberFact = async () => {
  const randomNumberFact = await getRandomNumberFactService();
  return randomNumberFact
}