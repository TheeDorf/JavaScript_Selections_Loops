

// Exercise 1 Section
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0){
    console.log(i) ; }
}
       


// Exercise 2 Section

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
        
    }
    else if (i %3 === 0) {
        console.log('FIZZ')
        
    }
    else if (i % 5 ===0){ 
    console.log('BUZZ')}
        
    else {
       continue
    }
}







