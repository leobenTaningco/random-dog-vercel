export default async function(req, res){
    const response = await fetch("https://dog.ceo/api/breed/labrador/images/random")
    const data = await response.json()

    res.writeHead(302, {
        Location: data.message
    });
    res.end();
}