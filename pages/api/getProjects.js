const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);


export default async function (_req, res) {
    const records = table.select({
        // Selecting the first 10 records in Full Data:
        maxRecords: 10,
        view: "Full Data"
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            console.log('Retrieved', record.get('title'));
        });
        res.json(records);
    });
    
};