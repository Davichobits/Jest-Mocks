export const getRandomNumberFactService = async () => {
  try{
    const response = await fetch('http://numbersapi.com/random/year?json', {
      headers: {"Content-Type": "aplication/json"}
    });

    const data = await response.json();
    return data
  }catch(error){
    return error
  }
}