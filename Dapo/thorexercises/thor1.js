function palindrome(string){
    const reversed =string.split('').reverse().join('');
    if (string === reversed){
console.log('This is a Palin o');
        return true ;
    } else {
        console.log('This is NOT a Palin o');
        return false;
    }
}

let test= 'Hello';
palindrome(test);
palindrome('anna');
palindrome('Dapo');