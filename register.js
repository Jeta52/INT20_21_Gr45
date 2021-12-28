function registerValidimi() {
    let user = document.forms["registerForma"]["userID"].value;
    let email = document.forms["registerForma"]["email"].value;
    let password = document.forms["registerForma"]["password"].value;
    
    if (user == "" && password != "" && email != "") {
      alert("Fusha user duhet te plotesohet.");
      return false;
    }
    else if(user != "" && password == ""  && email != "") {
      alert("Fusha password duhet te plotesohet.");
      return false;
    }
    else if(user != "" && password != ""  && email == "") {
      alert("Fusha email duhet te plotesohet.");
      return false;
    }
    else if(user != "" && password == ""  && email == "") {
      alert("Fushat email dhe password duhet te plotesohen.");
      return false;
    }
    else if(user == "" && password != ""  && email == "") {
      alert("Fushat user, email duhet te plotesohen.");
      return false;
    }
    else if(user == "" && password == ""  && email != "") {
      alert("Fushat user, password duhet te plotesohen.");
      return false;
    }
    else if(user == "" && password == ""  && email == "") {
      alert("Fushat user, email dhe password duhet te plotesohen.");
      return false;
    }
  
    else {
  
      if(user.length < 8) {
        alert("User ID duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else if(email < 8) {
        alert("Email duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else if(password < 8) {
        alert("Email duhet te jete me i gjate se 8 karaktere.");
        return false;
      }
      else {
        alert("Faleminderit qe u regjistruat " + user);
        return false;
      }
  
    } 
  
  }