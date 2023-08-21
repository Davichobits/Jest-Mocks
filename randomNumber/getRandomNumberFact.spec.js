import { getRandomNumberFact } from "./getRandomNumberFact.js";
import { getRandomNumberFactService } from "./getRandomNumberFactService.js";

jest.mock("./getRandomNumberFactService.js", ()=>{
  return {
  getRandomNumberFactService: jest.fn(()=> ({text: ""}))
}})

// jest.mock("./getRandomNumberFactService.js")

beforeEach(()=>{
  getRandomNumberFactService.mockClear();
})

it('should return a random number fact', async ()=>{
  // getRandomNumberFactService.mockReturnValueOnce({text: ""})
  const numberFact = await getRandomNumberFact();
  expect(typeof numberFact.text).toBe('string')
})

it('should call getRandomNumberFactService', async ()=>{
  await getRandomNumberFact()
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1)
})

it('should return an error when the service throws an exception', async ()=>{
  getRandomNumberFactService.mockReturnValueOnce(new Error('ups'))
  const numberFact = await getRandomNumberFact();
  expect(numberFact).toBeInstanceOf(Error);
})