{
let elements = document.getElementsByClassName("original-dates"); 
this.rdate = Array.from(elements);
let element4 = document.getElementsByClassName("panel-user-email"); 
this.remail = Array.from(element4);  
let element5 = document.getElementsByClassName("panel-user-phone"); 
this.rphone = Array.from(element5); 
let element2 = document.getElementsByTagName("h2"); 
this.course = Array.from(element2); 
let element3 = document.getElementById("full_name"); 
this.fullname = document.getElementById("full_name").innerText; 
 

let subj = 'subject=Ride Leader Volunteer ' + rdate[0].innerText + '&amp'; 
console.log(subj);

let body = 'body=***Thank you for volunteering!***%0D%0A%0D%0A' +
                   'I volunteer to lead the ride ' + 
                   course[0].innerHTML + 
                   ' on ' + rdate[0].innerText + '%0D%0A' +
                   fullname + '%0D%0A' +
                   remail[0].innerHTML + '%0D%0A' +
                   rphone[0].innerHTML;
console.log(body);
 
let xmail = '<a href="mailto:WeekendRideCoord@creamcitycycleclub.com?' +
        'cc=asjrb2000@gmail.com&' +
        subj + ' &' + 
        body + 
        ' " id="ctl00_ctl00_contacts_repeater_email_link_3" class="contact-email" style="background-color: rgb(241, 241, 241);">' +
        'WeekendRideCoord@creamcitycycleclub.com</a> ';
console.log(xmail);
 
document.write(xmail);
}
