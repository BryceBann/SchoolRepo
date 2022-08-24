const generatePassword = function(){ 
    var passLength = window.prompt("Select characters amount between 8-128.")
    if(passLength < 8){
      window.alert("Not enough characters please try again.") 
      generatePassword()
    }else if(passLength > 128){
      window.alert("Too many characters please try agian.")
      generatePassword()
    }else{
      window.alert("Character amount set to " + passLength)
    }
    //self check function works
    console.log(passLength)
  
    var lower = window.prompt("Any lowercase characters?\n(Yes or No)")
    lower = lower.toUpperCase();
    if(lower ==="YES"){
      window.alert("You chose: " + lower)
      lower = true
    }else if(lower === "NO"){
      window.alert("You chose: " + lower)
      lower = false
    }else{
      window.alert("Please check spelling")
    }
}