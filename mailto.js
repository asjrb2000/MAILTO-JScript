console.log('This is my first log message.')
const elements = document.getElementsByClassName("original-dates"); 
const rdate = Array.from(elements); 
const element2 = document.getElementsByTagName("h2"); 
const course = Array.from(element2); 
const element3 = document.getElementById("full_name"); 
const fullname = element3.innerText; 
document.write('<p>' + fullname + '</p>'); 
course.forEach(console.log); 
rdate.forEach(console.log);
 
document.write('<p>Hello John:' + course[0].innertext + '</p>'); 

const subj = 'subject="' + rdate[0].innerHTML + '&amp;"'; 
document.write('<p>' + subj + '</p>'); 

const body = 'body=I volunteer to lead the ride on ' + course[0].innertext + ' --- ' + fullname; 
document.write('<p>' + body + '</p>'); 

const xmail = '<a href="mailto:asjrb2000@yahoo.com?' +
        'cc=asjrb2000@gmail.com&' +
        'subject=Wed Ride Volunteer for' + rdate[0].innerHTML + ' &' + 
        body + 
        ' " class="ce-button ">Volunteer</a> '; 
console.log(xmail); 
document.write(xmail);

