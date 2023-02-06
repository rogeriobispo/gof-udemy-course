import Client from './Client'

export default class Notify {
  sendEmail(from: string, to: string, name: string): boolean{
    console.log(`
      De: ${from} 
      Para: ${to},
      body: seja bem vindo ${name} 
    `)
    return true
  }
}