// nodejs request module
import * as https from 'https';
// https://github.com/chrisweb/chrisweb-utilities.js
//import utilities from 'chrisweb-utilities';
/*
let scrapDetails = function (urlToScrap, callback) {

    https.request(urlToScrap, function (error, response, html) {

        if (!error && response.statusCode == 200) {

            utilities.log('finished harvesting details, now extracting metadata ...', 'fontColor:yellow');

            let $ = cheerio.load(html);

            let result = {};

            let $body = $('body');
            let $mainContent = $body.find('.maincontent');
            let $rowsChildren = $mainContent.children('.row');
            let $thirdRow = $rowsChildren.eq(2);
            let $detailsTable = $thirdRow.find('table');
            //let $detailsTableBody = $detailsTable.find('tbody');
            let $tableRows = $detailsTable.children('tr');

            $tableRows.each(function (index, element) {

                let $element = $(element);
                let $columns = $element.find('td');
                let $secondColumn = $columns.eq(1);

                let secondColumnContentRaw = $secondColumn.text();

                let secondColumnContent = sanitizeString(secondColumnContentRaw);

                switch (index) {
                    case 1:
                        result['address'] = secondColumnContent || '';
                        break;
                    case 2:
                        result['telephone'] = secondColumnContent || '';
                        break;
                    case 3:
                        result['mobile'] = secondColumnContent || '';
                        break;
                    case 4:
                        result['email'] = secondColumnContent || '';
                        break;
                    case 5:
                        result['website'] = secondColumnContent || '';
                        break;
                }

            });

            callback(null, result);

        } else {

            callback(error, '');

        }


    });

};
*/
const sanitizeString = function santizeStringFunction(input) {
    // 1) remove all spaces and tabs but keep \r and \n
    // 2) remove multiple spaces and keep just one
    // 3) trim removes spaces and line breaks if they are at the beginning or end,
    // so no regex needed for this
    const inputNoSpace = input.replace(/[\t]/g, '').replace(/  +/g, ' ').trim();
    // apple uses \r for linebreaks, linux \n and windows \r\n
    // replace all \n, all \r and all \r\n by <br>
    // replace multiple <br> with an optional space in front or after them with \u2028
    // json stringify won't escape \u2028 (which is LS)
    // if we would use \n it would get escaped
    // below before writing the csv we will convert the \u2028 back to \n
    const output = inputNoSpace.replace(/(\r\n?|\n)/g, '<br>').replace(/( ?<br\s*\/?> ?){1,}/gi, '\u2028');
    return output;
};
const pageCounter = 1;
const scrap = (urlToScrap, callback) => {
    https.get(urlToScrap, (response) => {
        console.log(response);
        /*if (!error && response.statusCode == 200) {

            utilities.log('finished harvesting page ' + pageCounter + ' now extracting metadata ...', 'fontColor:blue');

            pageCounter++;

            let $ = cheerio.load(html);

            const parsedResults = [];

            const $body = $('body');

            /*const domainToScrap = 'http://www..com';

            let $elementWithId = $body.find('#ausform');
            let $table = $('#ausform').find('table');
            let $tableBody = $table.find('tbody');
            let $allRows = $tableBody.children('tr');

            let allRowsLength = $allRows.length;

            $allRows.each(function (index, element) {

                // wait 1 second then do next call
                setTimeout(() => {

                    let $element = $(element);

                    let $titleColumn = $element.find('.cspacer.ca3');
                    let $countryColumn = $element.find('.cspacer.ca4');
                    let $hallsColumn = $element.find('.cspacer.ca5');
                    let $boothsColumn = $element.find('.cspacer.ca6');

                    let $titleColumnLink = $titleColumn.find('a');
                    let detailsUrl = domainToScrap + $titleColumnLink.prop('href');
                    let name = $titleColumnLink.text().trim();

                    let country = $countryColumn.text().trim();

                    let halls = $hallsColumn.html().trim().replace(/<br>/g, ' / ').replace(/&#xA0;/g, ' ');

                    let booths = $boothsColumn.html().trim().replace(/<br>/g, ' / ').replace(/&#xA0;/g, ' ');

                    // metadata
                    let coreMetadata = {
                        name: name,
                        country: country,
                        halls: halls,
                        booths: booths
                    };

                    // now scrap the details page
                    // TODO: there should only be one scrapper
                    scrapDetails(detailsUrl, (error, detailsMetadata) => {

                        if (!error) {

                            let metadata = _.assign(coreMetadata, detailsMetadata);

                            parsedResults.push(metadata);

                            if (index === allRowsLength - 1) {

                                // find links to other pages (through pagination)
                                let $pager = $body.find('.pager');
                                let $lastLinkElement = $pager.find('a').last();
                                let lastLinkUrl = $lastLinkElement.prop('href');

                                let nextPageUrl = null;
                                let lastLinkContent = parseInt($lastLinkElement.text().trim());

                                // if the content of the last link last link is NaN it means that
                                // it contains an arrow image, so we have a next page, otherweise
                                // if it is numeric it means we have reached the end
                                if (_.isNaN(lastLinkContent)) {
                                    nextPageUrl = domainToScrap + lastLinkUrl;
                                }

                                callback(null, parsedResults, nextPageUrl);

                            }

                        } else {

                            callback(error, []);

                        }

                    });

                }, index*1000);

            });*/
        /*} else {

            callback(error, []);

        }*/
    });
};
function newFunction(response) {
    console.log(response);
}
/*let saveAsCSV = function (results, fields) {

    json2csv({ data: results, fields: fields }, function (error, csv) {

        // now we need to convert the \u2028 to \n
        // in json we used \u2028 because JSON.stringify won't escape it
        // but now we use \n before writing the csv to disk
        // TODO: would it be better to use os.EOL instead of hardcoded \n ?
        csv = csv.replace(/\u2028/g, '\n');

        if (error) {

            console.log(error);

        } else {

            fs.writeFile('output.csv', csv, function (err) {

                if (error) {

                    utilities.log(error, 'fontColor:red');

                } else {

                    utilities.log('file saved / job done :)', 'fontColor:green');

                }

            });

        }

    });

};*/
/*let createFile = function (results) {

    let fields = _.keys(results[0]);

    saveAsCSV(results, fields);

};*/
/*var save = function saveFunction(results) {

    // save the scrapping result
    switch (scrapOptions.save) {
        case 'csv':
            createFile(results);
            break;
    }

}*/
//let results: [] = [];
//let pagesCount = 0;
/*const execute = (scrapUrl: string): void => {

    scrap(scrapOptions.url, (error, parsedResults, nextPageUrl: string): void => {

        if (!error) {

            results = _.union(results, parsedResults);

            // if there is no next page no need to go on scrapping
            if (!_.isNull(nextPageUrl)) {

                pagesCount++;

                let scrapOn = false;

                // continue scrapping if the amount of scrapped pages
                // is below the amount defined in the options or if
                // no limit got defined at all
                if (
                    'count' in scrapOptions.pagination
                    && pagesCount < scrapOptions.pagination.count
                ) {
                    scrapOn = true;
                } else if (!('count' in scrapOptions.pagination)) {
                    scrapOn = true;
                }

                if (scrapOn) {

                    // wait 1 second then do next call
                    setTimeout(() => {
                        execute(nextPageUrl);
                    }, 1000);

                } else {

                    save(results);

                }

            } else {

                save(results);

            }

        }

    };

};*/
//utilities.log('scrapping started', 'fontColor:green');
/*const scrapOptions = {
    url: 'https://news.ycombinator.com/',
    pagination: {
        count: 10
    },
    save: 'csv'
};*/
//execute(scrapOptions.url);
