let fnamenode=document.getElementById("fname");
let emailnode=document.getElementById("email");
let msgnode=document.getElementById("text");

let border1="2px solid red";
let border2="2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3");

function validate1(){
    tdNode1.textContent="";
    let fname=fnamenode.value;
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.textContent="this field is required";
        fnamenode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="name should have only alphabets";
        fnamenode.style.border=border1;
        return false;
    }
    else{
        fnamenode.style.border=border2;
        return true;
    }
}
function validate2(){
    tdNode2.textContent="";
    let emailId=emailnode.value;
    let ss=emailId.substring(emailId.indexOf('@')+1);
    console.log(ss);
    if(emailId==''){
        tdNode2.textContent="this field is required";
        emailnode.style.border=border1;
        return false;
    }
    else if(!emailId.includes('@') || ss==''){
        tdNode2.textContent="Please put valid email id";
        emailnode.style.border=border1;
        return false;
    }
    else{
        emailnode.style.border=border2;
        return true;
    }
}
function validate3(){
    tdNode3.textContent="";
    let fname=msgnode.value;
    if(fname==''){
        tdNode3.textContent="this field is required";
        msgnode.style.border=border1;
        return false;
    }
    else{
        msgnode.style.border=border2;
        return true;
    }
}
function validateForm(){
    let st1=validate1(); 
    let st2=validate2();
    let st3=validate3();
    return st1 && st2 && st3 ;
}