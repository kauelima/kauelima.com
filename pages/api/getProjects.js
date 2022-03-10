const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function projectsData (_req, res) {
    const records = table.select({
    // Selecting the first 10 records in Full Data
    maxRecords: 10,
    view: "Full Data"

    }).firstPage(function(err, records) {
        
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            console.log('Retrieved', record.get('title'));
        });
        // Push airtable response to endpoint response
        

        // To get minified records array
        const minifyItems = (records) =>
        records.map((record) => getMinifiedItem(record));

        // to make record meaningful.
        const getMinifiedItem = (record) => {
            return {
                id: record.id,
                fields: record.fields,
            };
        };
        res.json(minifyItems(records));
    });
    
};