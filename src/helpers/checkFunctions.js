const checkObject = (inputBody, object) => {
    const downField = inputBody.toLowerCase()
    const oneObject = Object.getOwnPropertyNames(object).find(singleKey => singleKey === downField)
    if(oneObject !== downField){
        return false
    }

    return downField
}

const checkRegExp = ( numberToCheck ) => {
    try {
        const reg = new RegExp('^[0-9]*$')
        const dniNumber = parseInt(numberToCheck)

        if(!reg.test(dniNumber)){
            return false
        }

        return numberToCheck
    } catch (err) {
        console.log(err);
        return false
    }
    
}

const checkCharSetRegExp = (input) => {
    try {
        const reg = new RegExp('^[a-zA-Z\\s]+$')
        const charset = input

        if(reg.test(charset) == false){
            console.log({Invalid_type_Input: charset});
            return false
        }

        return charset
    } catch (err) {
        console.log(err);
        return err
    }
    
}



module.exports = {
    checkObject,
    checkRegExp,
    checkCharSetRegExp
}