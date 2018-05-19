
// callback function
getOrder(orderId, function(order){
    getUser(order.userId, function(user){
        getCompany(user.companyId, function(company){
            // do something with company
        });
    });
});


// promise


getOrder(3).then(function(order){
    return getUser(order.userId)
}).then(function(user){
    return getCompany(user.companyId)
}).then(function(company){
    console.log(company);
}).catch(function(error){
    console.log(error);
});



function getOrder(orderId){
    // do some works
    if(true){
        return Promise.resolve({ userId: 20 });
    } else {
        return Promise.reject(`Order not Found!`);
    }
}


function getUser(userId){
    // do some works
    if(true){
        return Promise.resolve({ companyId: 10 });
    } else {
        return Promise.reject(`User not Found!`);
    }
}


function getCompany(companyId){
    // do some works
    if(true){
        return Promise.resolve({ name: 'Softera' });
    } else {
        return Promise.reject(`Company not Found!`);
    }
}
