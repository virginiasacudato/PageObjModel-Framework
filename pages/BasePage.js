export default class BasePage {
    async getTitle(){
      return await page.title()
    }
  async getUrl(){
    return await page.url()
  }
  async getText(selector){
    try {
      await page.waitForSelector(selector)
      return await  page.$eval(selector,(el)=>el.textContent) // evalua el selector y el selector regresara el elemento y el text
    } catch (error) {
        throw new Error(`Error al obtener el texto del  selector ${selector}`)
    }
  }

  async getAttribute(selector, attribute){
    try {
      await page.waitForSelector(selector)
      return await  page.$eval(selector,(el)=>el.getAttribute(attribute)) // evalua el selector y el selector regresara el elemento y el atributo
    } catch (error) {
      throw new Error(`Error al obtener el atributo del  selector ${selector}`)
    }
  }

  async getValue(selector){
    try {
      await page.waitForSelector(selector)
      return await  page.$eval(selector,(el)=>el.value) // evalua el selector y el selector regresara el elemento y el value o valor
    } catch (error) {
      throw new Error(`Error al obtener el value del  selector ${selector}`)
    }
  }

  async geCount(selector){
    try {
      await page.waitForSelector(selector)
      return await  page.$$eval(selector,(el)=>el.length) // evalua el selector y devolvera un array con muchos elementos (longitud del array)
    } catch (error) {
      throw new Error(`Error al obtener el numero de elementos del selector ${selector}`)
    }
  }

  async click(selector){
    try {
      await page.waitForSelector(selector)
      await page.click(selector)
    } catch (error) {
      throw new Error(`Error al dar click al selector ${selector}`)
    }
  }

  async type(selector, text, opts={}){
    try {
      await page.waitForSelector(selector)
      await page.type(selector, text.opts)
    } catch (error) {
      throw new Error(`Error al escribir en el selector ${selector}`)
    }
  }

  async doubleClick(selector){
    try {
      await page.waitForSelector(selector)
      await page.click(selector, { clickCount: 2 })
    } catch (error) {
      throw new Error(`Error al dar doble click al selector ${selector}`)
    }
  }

  async wait(time){
    return page.waitForTimeout(time)
  }
}