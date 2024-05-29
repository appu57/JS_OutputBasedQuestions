1 . Difference between NodeJs and Javascript 
       
       Node and Browser are env where we run js , javascript is client side whereas node is server side 
       We can use DOM api to manipulate the DOM(html) elements where node has no facility since there is no "document " to access any element(getElementById)
       NodeJs has no access to browser specific api , provides full access to the user file system but is not available in brower
       NodeJs global object is called global whereas in Browser it is window

2. Difference between null and undefined

       null and undefined signifies absence of a value , undefined is automatically initial value assigned to any variable which is not been initialised 
       Eg : let name ;
            console.log(name); //undefined
        null is explicitly assigned and not automatically assigned like undefined  , both are falsy value and not equal to each other
        Type of undefined is undefined Type of null is Object
         
3.  What is Enumerated attribute ?
     
        The property of html element whose value has to be explicitly assigned
        draggable ="true" //Enumerated
        required/>     //boolean

4. Event Bubbling: when we add click event on child element taken through element.getId and do console.log("child") and console.log("parent") in parent 
   taken through element.getId  when we click on child [child and parent is given] when we click on parent only [parent is given]  ?
    
    The above event is called Event bubbling , where the child bubbles to parent to prevent the above by using event.stopPropogation() in child


5. Debouncing in JS?
   
   onKeyUp="validateInput()" here when user enters each key the validateInput() is called to enhance the memory and to optimise we use debounce which will clear previous call for validateInput and calls the function only when entire word is typed again if user starts writing the function is not called

   function debounce(timeout)
   {
        let setTimeOut;
        return ()=>{
           clearTimeout(setTimeOut);
           setTimeOut = setTimeout(()=>{
                validateInput()
           },timeout)
        }
   }

6. Disadvantage of querySelectorAll() compared with getElementsByTagName()? 
    
    <span></span>
    <span></span>
    <span></span>
    const querySelector = document.querySelectorAll('span');
    const tagName = document.getElementsByTagName('span');
    const span = document.createElement('span');
    const body = document.getElementsByTagName('body')
    body.append(span); //created a new span and appended it into body now count of span is 4

    console.log(querySelector.length());  //3
    console.log(tagName.length());  //4

    QuerySelector takes a snapshot of DOM , and after that if DOM is modified (span is added), there is no changes that would be reflected in querySelector collection list .The count of span from querySelector is still 3 and for tagName it is 4 because the DOM changes are reflected in tagNaame collection list 


7.  In Javascript multiple function can be seperated by comma a(),b(),c(),d() such expresssion will be executed left to right and we get the output of   
    last function and the other output will be discarded

8.  List of falsy values , which is considered as false 
    null , undefined , false , 0 , NaN , -0 , 0n , "" , document.all

9.  List of truthy values
      
    true , a string with even one character ,object with atleast 1 property , positive number>0 , []