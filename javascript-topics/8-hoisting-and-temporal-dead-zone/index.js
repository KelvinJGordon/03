// With var "name" variable is initialized with a value of "undefinded" therefore the code block will run
{
console.log('name is ', name);
var name = "tom";
name = 'tom';
console.log('name is ', name);
}

// With let "name" variable is initialized without a value therefore the code will not run, it must be declared before
{
    console.log('name is ', name);
    let name = "tom";
    name = 'tom';
    console.log('name is ', name);
}

// With const
{
    console.log('name is ', name);
    const name = "tom";
    //name = 'tom';
    console.log('name is ', name);
}


// Temporal Dead Zone(TDZ)

// TDZ = an area where you can not access a variable until it is initialized

// ReferenceError

{
    // === name variable's TDZ started here
    //
    //console.log(name); // RerenceError
    //
    console.log(address); // RerenceError
    let address = "bangalore";
    //
    let name = "tapaScript" // === name variable's TDZ ends here
    console.log(name);
    //
    //
}