export default async function handler(req, res) {
    const response = await fetch("https://dog.ceo/api/breed/borzoi/images/random")
    const data = await response.json()

    res.writeHead(302, {
        Location: data.message
    });
    res.end();
}