import BasePage from "./BasePage";

export default class  LoginPage extends BasePage {

  constructor() {
    super();
    this.userName= 'input[@id="Usuario"]'
    this.Password = 'input[@id="password"]'
    
  }


}