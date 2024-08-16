import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const firstName = chance.first();
  const lastName = chance.last();
  const twitter = chance.twitter();
  const geohash = chance.geohash();

  response.status(200).json({
    firstName: firstName,
    lastName: lastName,
    twitter: twitter,
    geohash: geohash,
  });
}
