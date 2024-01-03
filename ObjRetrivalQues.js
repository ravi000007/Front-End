function main(){

    const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '001',
      zipCode: "10011"
    }
  };
  
  function getUserDetail(profile, keys) {
    // Implement your function here
      for(let key of keys){
          if(!profile[key]){
              return "Not Available";
          }
          profile = profile[key];
      }
      return profile;
  }
  
  
  console.log(getUserDetail(userProfile2, ["address","city"]));
  // Usage: should return "New York"
  //do not modify the return statement
return getUserDetail;
}

main();