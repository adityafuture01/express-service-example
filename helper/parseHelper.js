const parseInput = (data, version) => {
    let fName = data.substring(0, 8);
    let lName = data.substring(fName.length, fName.length + 10);
    let clientId = data.substring(fName.length + lName.length);
    
    if (version === 2){
        clientId = `${clientId.substring(0,3)}-${clientId.substring(3)}`
    }
    if (version === 2){
        fName = fName.replace(/0+$/, "");
    }
    if (version === 2){
        lName = lName.replace(/0+$/, "");
    }

    const parseData = {firstName: fName, lastName: lName, clientId: clientId};
    return parseData;
}

module.exports = {
    parseInput
}