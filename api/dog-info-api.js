const breedRes = await fetch('https://api.api-ninjas.com/v1/dogs?name=Labrador', {
  headers: { 'X-Api-Key': $env.API_NINJAS_KEY }
});
const breedInfo = (await breedRes.json())[0];