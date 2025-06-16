export default async function handler(req,res){
  let imageUrl, breed, capitalizedBreed, breedInfo;

  while(true){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    imageUrl = data.message;

    const parts = imageUrl.split("/");
    breed = parts[parts.indexOf("breeds") + 1];
    capitalizedBreed = breed.charAt(0).toUpperCase() + breed.slice(1);

    const breedRes = await fetch('https://api.api-ninjas.com/v1/dogs?name=' + capitalizedBreed, {
      headers: { 'X-Api-Key': process.env.API_NINJAS_KEY }
    });
    const json = await breedRes.json();

    if(json.length > 0){
      breedInfo = json;
      break;
    }
  }
  res.status(200).json({ imageUrl, breed: capitalizedBreed, breedInfo });
}