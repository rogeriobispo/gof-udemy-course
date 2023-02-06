import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankCard from "./NubankCard";

const creditCard: NubankCard = new CreditCard()
const debitCard: NubankCard = new DebitCard()

creditCard.validate()
creditCard.collectPayment()

debitCard.validate()
creditCard.collectPayment()

