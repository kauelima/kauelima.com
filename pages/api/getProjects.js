const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function projectsData (req, res) {
    const records = table.select({
    // Selecting the first 10 records in Full Data
    maxRecords: 10,
    view: "Full Data"

    }).firstPage(function(err, records) {
        try{
            // Get all records to minify them
            const minifyItems = (records) =>
            records.map((record) => getMinifiedItem(record));
            
            // Minify the record data that will be returned
            const getMinifiedItem = (record) => {
                return {
                    id: record.id,
                    cols: record.fields.cols,
                    rows: record.fields.rows,
                    img: record.fields.img,
                    title: record.fields.title,
                    client: record.fields.client,
                };
            };
            
            // Cache response for 30 seconds and 
            res.setHeader('Cache-Control', 's-maxage=10 stale-while-revalidate');
            // Push response to endpoint
            res.statusCode = 200;
            res.json(
                minifyItems(records)
            );}
        catch(err){
             // Push response to endpoint
             console.error(err);
             res.statusCode = 500;
             res.json({msg: 'Something went wrong'});
        }
            })
            
        };