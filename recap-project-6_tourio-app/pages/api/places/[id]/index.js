import dbConnect from "@/db/connect";
import Sight from "@/db/models/Sight";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const sight = await Sight.findById(id);

    if (!sight) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(sight);
  } else if (request.method === "PUT") {
    const sightData = request.body;
    await Sight.findByIdAndUpdate(id, sightData);
    return response.status(200).json({ status: `Sight ${id} updated!` });
  } else if (request.method === "DELETE") {
    await Sight.findByIdAndDelete(id);
    response.status(200).json({ status: `Sight ${id} deleted!` });
  }
}
