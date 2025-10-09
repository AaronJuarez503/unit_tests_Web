import {By, Builder, Browser} from 'selenium-webdriver';
import Chrome  from 'selenium-webdriver/chrome';
const options = new Chrome.Options();
let driver = new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(options.detachDriver(true))
      .build();