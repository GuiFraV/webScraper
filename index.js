const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;

const app = express();

const url = 'https://www.linkedin.com/in/rayane-benazzouz/';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('.text-heading-xlarge inline t-24 v-align-middle break-words', html).each(() => {
            $(this.text());
            $(this).attr('h1')
        })
    })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));