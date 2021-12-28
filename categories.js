const flowersNames = {
    ClimbingRoses: "Climbing Roses",
    FloribundaRoses: "Floribunda Roses",
    HybridTeaRoses: "Hybrid Tea Roses",
    GrandifloraRoses: "Grandiflora Roses"
  };
  
  document.getElementById("climbingRoses").innerHTML = flowersNames.ClimbingRoses;
  document.getElementById("FloribundaRoses").innerHTML = flowersNames.FloribundaRoses;
  document.getElementById("HybridTeaRoses").innerHTML = flowersNames.HybridTeaRoses;
  document.getElementById("GrandifloraRoses").innerHTML = flowersNames.GrandifloraRoses;
  
  
  function karta_e_luleve(emri, cmimi) {
    this.emri = emri;
    this.cmimi = cmimi;
  }
  
  const karta1 = new karta_e_luleve("Furand Tulip", 29.99);
  const karta2 = new karta_e_luleve("Lifestyle Tulip", 39.99);
  const karta3 = new karta_e_luleve("Golden Tulip", 39.99);
  const karta4 = new karta_e_luleve("Margarita Tuli", 29.99);
  
  document.getElementById("Furand").innerHTML = karta1.emri; 
  document.getElementById("Lifestyle").innerHTML = karta2.emri; 
  document.getElementById("Golden").innerHTML = karta3.emri; 
  document.getElementById("Margarita").innerHTML = karta4.emri; 
  
  document.getElementById("cmimi1").innerHTML = karta1.cmimi + " &euro;"; 
  document.getElementById("cmimi2").innerHTML = karta2.cmimi + " &euro;"; 
  document.getElementById("cmimi3").innerHTML = karta3.cmimi + " &euro;"; 
  document.getElementById("cmimi4").innerHTML = karta4.cmimi + " &euro;";