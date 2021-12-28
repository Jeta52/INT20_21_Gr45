function loginValidimi() {

    let user = document.forms["loginForma"]["user"].value;
    let password = document.forms["loginForma"]["password"].value;
    
    if (user == "" && password != "") {
      if(password.length < 8) {
        alert("Passwordi duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else {
        alert("Fusha user duhet te plotesohet.");
        return false;
      }
    }
  
    else if(user != "" && password == "") {
      if(user.length < 8) {
        alert("User ID duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else {
        alert("Fusha password duhet te plotesohet.");
        return false;
      }
    }
  
    else if(user == "" && password == "") {
      alert("Fushat user dhe password duhet te plotesohen.");
      return false;
    }
  
    else {
      if(password.length < 8 && user.length < 8) {
        alert("Passwordi dhe User ID duhet te jene me te gjate se 8 karaktere.");
        return false;
      }
      else if(password.length < 8 && user.length > 8) {
        alert("Passwordi duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else if(password.length > 8 && user.length < 8) {
        alert("User ID duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else {
        alert("Falminderit qe jeni loguar " + user);
      }
      
    }
    
  }