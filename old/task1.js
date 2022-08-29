function run(){
    let x = Number(document.getElementById("num1").value), 
    y = Number(document.getElementById("num2").value);
    console.log('x * y = ', x * y);
    console.log('x / y = ', x / y); 
    console.log('x % y = ', x % y);  
    console.log('++x = ', ++x); 
    console.log('x++ = ', x++); 
    console.log('x = ', x);
    console.log('--x = ', --x); 
    console.log('x-- = ', x--);
    console.log('x = ', x);
    console.log('x ** y =', x ** y);
}