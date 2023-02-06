import Client from './Client'
import Notify from './Notify'


const client = new Client('Rogério bispo','rogerio.bispo@yahoo.com.br')
const notify = new Notify()


notify.sendEmail('Account Manager', client.email, client.name)

