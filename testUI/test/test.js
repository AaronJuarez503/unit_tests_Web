import {By, Builder, Browser} from 'selenium-webdriver';
import assert from "assert";

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:5173/');
  
    let textBox = await driver.findElement(By.name('input1'));
    let textBox2 = await driver.findElement(By.name('input2'));
   
    await textBox.sendKeys(2);
    await textBox2.sendKeys(2);
  
    let button = await driver.findElement(By.className('btn'));
    await button.click();
 
  } catch (e) {
    console.log(e)
  } finally {
    console.log("Closing the browser");
   // await driver.quit();
  }
}())