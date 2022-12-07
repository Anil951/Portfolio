function thanks(){
    a=document.getElementById('namee').value;
    b=document.getElementById('mail').value;
    c=document.getElementById('msg').value;
    if(a.length>0){
        if(b.length>0 && b.includes('@gmail.com',a[b.length-10])==true){
            if(c.length>10){
                
                alert('Thanks for the Response 😄😄')
                document.getElementById("contactform").reset(); //to reset the form once submited
            }
            else{
                alert('Message should contain atleast 10 characters')
            }
        }
        else{
            alert('Email should be in format--name@gmail.com')
        }
    }
    else{
        alert('Enter name')
    }
}

// function redirectverify(){
//     if (window.confirm('Really go to another page?'))
//     {
//         alert('this page is going to redirect...');
//     }
//     else
//     {
//         die;
//     }
// }