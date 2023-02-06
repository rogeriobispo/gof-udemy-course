export default class Client {
  email: string  
  name: string

  constructor(name: string, email: string){
    this.email = email
    this.name = name
  }
  create(): void {}
  read(): void {}
  update(): void {}
  delete(): void {}

 // sendEmail(): boolean {
 //   return true
 // } 
  // the responsabillity of sending email does not belong here
  // should be responsability from another entity
  //for instance notifier
}