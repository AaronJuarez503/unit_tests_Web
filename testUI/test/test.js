import {By, Builder, Browser} from 'selenium-webdriver';
import Chrome  from 'selenium-webdriver/chrome';
const options = new Chrome.Options();
(async function example() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('https://www.example.com');

    } finally {

        await driver.quit();

    }

})();