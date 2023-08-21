import { getRandomNumberFact } from "./getRandomNumberFact.js";
import { getRandomNumberFactService } from "./getRandomNumberFactService.js";

jest.mock("./getRandomNumberFactService.js", ()=>{
  return {
  getRandomNumberFactService: jest.fn(()=> ({text: ""}))
}})

// jest.mock("./getRandomNumberFactService.js")

it('should return a random number fact', async ()=>{
  // getRandomNumberFactService.mockReturnValueOnce({text: ""})
  const numberFact = await getRandomNumberFact();
  expect(typeof numberFact.text).toBe('string')
})

it('should call getRandomNumberFactService', async ()=>{
  await getRandomNumberFact()
  expect(getRandomNumberFactService).toHaveBeenCalled()
})