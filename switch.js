

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)

    var elm = document.getElementById("mainStyleSheet")
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    currentStyleName = elm.getAttribute('href');
    if (currentStyleName == "style1.css"){
        elm.setAttribute("href", "style2.css");
    }else{
        elm.setAttribute("href", "style1.css");
    }
    
   
    // 1 (c) Determine new stylesheet file name

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("savedStyleName", elm.href)
    return false;
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    if(localStorage.getItem("savedStyleName") != null){
        savedSheetName = localStorage.getItem("savedStyleName");
    }else{
        savedSheetName = "style1.css";
    }
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    
    // 2 (b) get html style element by ID
    elm = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    //elm.href = savedSheetName;
    elm.setAttribute("href", savedSheetName)
    console.log(elm.href);
}


