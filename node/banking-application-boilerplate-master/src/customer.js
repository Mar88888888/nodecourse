var customerList= [];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      for(let customer of customerList) {
            if(customer[0] === CustomerId){
                  return;
            }
      };
      customerList.push([CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category]);
}

const updateCustomer=(CustomerId, CustomerName, CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      for(let customer of customerList) {
            if(customer[0] === CustomerId){
                  index = customerList.indexOf(customer);
                  customerList[index] = [CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category];
                  return;
            }
      };
}

const getAllCustomers=()=>{
      return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers};