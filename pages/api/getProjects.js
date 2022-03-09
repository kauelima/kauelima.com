import { table } from "../../utils/Airtable";

export default async (_req, res) => {
  try {
    const records = await table.select({view: "Full Data"}).firstPage();
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Could not get data from Airtable" });
  }
};