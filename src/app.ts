// interface IsPerson{
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a:number):number;
// }

// const me:IsPerson={
//     name:'shaun',
//     age:30,
//     speak(text:string):void{
//         console.log(text);

//     },
//     spend(amount:number):number{
//         console.log('I spent',amount);
//         return amount;
//     },

// };
// console.log(me);
// let docOne:HasFormatter;
// let docTwo:HasFormatter;

// docOne=new Invoice('yoshi','web work',250)
// docTwo=new Payments('mario','plumbing',200)

// let docs:HasFormatter[]=[]
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// const invOne=new Invoice('mario','work on mario website',250)
// const invTwo=new Invoice('luigi','work on luigi website',300)


// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo)



import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import {Payments} from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter';

const form=document.querySelector('.new-item-form') as HTMLFormElement

const type=document.querySelector('#type') as HTMLSelectElement

const tofrom=document.querySelector('#tofrom') as HTMLInputElement

const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement


const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{

    e.preventDefault()
let values:[string,string,number];
 values=[tofrom.value,details.value,amount.valueAsNumber]

    let doc:HasFormatter;
if(type.value==='invoice'){
doc=new Invoice(...values);

}else{
    doc=new Payments(...values);
}


list.render(doc,type.value,'end');
})

// const addUID=<T extends object>(obj:T)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
// let docOne=addUID({name:'yoshi',age:40});
// console.log(docOne.name);



