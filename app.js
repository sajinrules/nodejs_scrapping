var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    
    url = 'http://www.imdb.com/chart/top';

    request(url, function(error, response, html){
        if(!error){
            //console.log("response:",response);
            //console.log("html:",html);
            var movies=[];
            var n=0;
            var $ = cheerio.load(html);
            $('td.titleColumn > a').filter(function(){
                console.log(n,":#:",$(this).text());
                //fruits[i] = $(this).text();
            });

            
            //var data = $(this);
           /* $('tbody.lister-list > tr').each(function(i, elem) {
                if(n>250)
                    return false;
                
                $('td.titleColumn > a').filter(function(){
                    console.log(n,":#:",$(this).text());
                    fruits[i] = $(this).text();
                });

                n++;
            });*/
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;