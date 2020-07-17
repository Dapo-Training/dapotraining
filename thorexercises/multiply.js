//Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 

const prompts = require('prompts');

(async() =>{
    const number1 = await prompts ({
        type: 'number',
        name: 'firstnumber',
        message: 'enter your first number:'
    });

    const number2 = await prompts ({
        type: 'number',
        name: 'secondnumber',
        message: 'enter your second number:'
    }); 
    
    const operation = await prompts ({
        type: 'text',
        name: 'action',
        message: 'do you want to multiply or divide?'
    });

    let product = number1.firstnumber * number2.secondnumber;
    let division = number1.firstnumber/number2.secondnumber;

    if (operation.action =='multiply') {
        console.log(product);
    }  else if (operation.action =='divide') {
        console.log(division);
    } else {
        console.log('you gave a rubbish response to the multiply or divide question my friend');
    };
})();
