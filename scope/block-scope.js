console.log('Top level scope');
function scopeExample() {
    console.log('Scope block 1');
    for (let i = 0; i < 10; i++) {
        console.log('Scope block 2');
        if (true) {
            console.log('Scope block 3');
        } else {
            console.log('Scope block 4');
        }
        {
            console.log('Scope block 5');
        }  
        console.log('Scope block 1');      
    }
}

console.log('Top level scope');