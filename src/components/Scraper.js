const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const [el] = await page.$x('//*[@id="app"]/div[3]/div[2]/div/main/div[3]/div[1]/div[2]/div[1]/img')
  const src = await el.getProperty('src')
  const srcTxt = await src.jsonValue()

  const [el2] = await page.$x('//*[@id="app"]/div[3]/div[2]/div/main/div[3]/div[3]/div[1]/div/div/div[1]/div[5]/div[8]/div/div[2]/span[2]')
  const txt = await el2.getProperty('textContent')
  const accuracy = await txt.jsonValue()

  const [el3] = await page.$x('//*[@id="app"]/div[3]/div[2]/div/main/div[3]/div[3]/div[1]/div/div/div[1]/div[3]/div[1]/div/div[2]/span[2]')
  const txt2 = await el3.getProperty('textContent')
  const kdr = await txt2.jsonValue()

  console.log({ srcTxt, accuracy, kdr })

  browser.close()
}

scrapeProduct('https://tracker.gg/csgo/profile/steam/76561198242454314/overview')