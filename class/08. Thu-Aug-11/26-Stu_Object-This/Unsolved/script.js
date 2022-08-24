// TODO: What does 'this' refer to?
// the whole window page due to not being called object
console.log(this);

// TODO: What does 'this' refer to?
// is calling to object window due to no object being present 
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// this will put out 20 due to an object being present and calling the properity inside the object
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// this wil llog 5750 due to object being calld by this and the properity being selected 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
