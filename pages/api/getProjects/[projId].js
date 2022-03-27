const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function projectsData (req, res) {
    const { projId } = req.query
    const records = table.find(projId, function(err, record) {
        if (err) { console.error(err); return; }
        res.statusCode = 200;
        res.json(record.fields);
    })
};