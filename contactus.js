var currentdate = new Date(); 

var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

document.getElementById("koha").innerHTML = datetime;


//javascript per add dhe remove
$(document).ready(function(){

    // Add new element
    $(".add").click(function(){

        // Finding total number of elements added
        var total_element = $(".element").length;
                    
        // last <div> with element class id
        var lastid = $(".element:last").attr("id");
        var split_id = lastid.split("_");
        var nextindex = Number(split_id[1]) + 1;

        var max = 5;
        // Check total number elements
        if(total_element < max ){
            // Adding new div container after last occurance of element class
            $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
                        
            // Adding element to <div>
            $("#div_" + nextindex).append("<input type='text' placeholder='Enter your question' id='txt_"+ nextindex +"'>&nbsp;<span id='remove_" + nextindex + "' class='remove'>&#10005;</span>");
                    
        }
                    
    });

    // Remove element
    $('.container').on('click','.remove',function(){
                
        var id = this.id;
        var split_id = id.split("_");
        var deleteindex = split_id[1];

        // Remove <div> with id
        $("#div_" + deleteindex).remove();
    });                
});