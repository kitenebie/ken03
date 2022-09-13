let PagePosition;
const homepage = document.getElementById("homepage");
const educ = document.getElementById("educ");
const skills = document.getElementById("skills");
const contact = document.getElementById("contact");
const menus = [homepage, aboutpage, educ, skills, contact]

const skillscont = document.getElementById('skillscont');
const levelbar = document.querySelectorAll('.levelbar');

window.addEventListener('scroll', (event) => 
{
    var scrollToY = this.scrollY;
    console.log(scrollToY);
    console.log(window.innerWidth);
    if(window.innerWidth >= 1024)
    {
        for(i=0; i<=5;i++)
        {
            if(scrollToY >= 1761 && i == 4)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 1242 && scrollToY < 1761 && i == 3)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
                moveall()
            }
            else if(scrollToY >= 926 && scrollToY < 1242 && i == 2)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 560 && scrollToY < 926 && i == 1)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 0 && scrollToY < 560 && i == 0)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else
            {
                menus[i].style.color = "#ffffff";
                menus[i].style.borderBottom= "none";
                menus[i].style.fontWeight = "bolder";
                document.getElementById('msgcaption').innerText = ""
            }
        }
    }
    else if(window.innerWidth > 767 && window.innerWidth <= 1023)
    {
        for(i=0; i<=5;i++)
        {
            if(scrollToY >= 1789 && i == 4)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 1272 && scrollToY < 1789 && i == 3)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
                moveall()
            }
            else if(scrollToY >= 963 && scrollToY < 1272 && i == 2)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 630 && scrollToY < 963 && i == 1)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 0 && scrollToY < 630 && i == 0)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else
            {
                menus[i].style.color = "#ffffff";
                menus[i].style.borderBottom= "none";
                menus[i].style.fontWeight = "bolder";
                document.getElementById('msgcaption').innerText = ""
            }
        }
    }
    else if(window.innerWidth <= 767)
    {
        for(i=0; i<=5;i++)
        {
            if(scrollToY >= 1810 && i == 4)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 1327 && scrollToY < 1810 && i == 3)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
                moveall()
            }
            else if(scrollToY >= 1038 && scrollToY < 1327 && i == 2)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 590 && scrollToY < 1038 && i == 1)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else if(scrollToY >= 0 && scrollToY < 590 && i == 0)
            {
                menus[i].style.color = "#E11C2A";
                menus[i].style.borderBottom= "2px solid #E11C2A";
                menus[i].style.fontWeight = "bolder";
            }
            else
            {
                menus[i].style.color = "#ffffff";
                menus[i].style.borderBottom= "none";
                menus[i].style.fontWeight = "bolder";
                document.getElementById('msgcaption').innerText = ""
            }
        }
    }
    
});
document.querySelectorAll('.options a').forEach(function(pageSeclect){
    pageSeclect.addEventListener('click', function(){
        PagePosition = document.getElementById(pageSeclect.dataset.scroll).offsetTop - 50;               
        moveall()
        window.scrollTo({
            top: PagePosition,
            length: 0,
            behavior: 'smooth'
        })    
    })
})
   let GotoContact = document.getElementById('GotoContact');
    GotoContact.addEventListener('click', function(){
        PagePosition = document.getElementById(GotoContact.dataset.scroll).offsetTop - 50;                   
        window.scrollTo({
            top: PagePosition,
            length: 0,
            behavior: 'smooth'
        })
            
    });
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Email Sending...';
    emailjs.sendForm('default_service', 'template_chpypp8', this).then(() => {
            btn.value = 'Send Email';
            document.getElementById('msgcaption').innerText = "Successfully Sent, Thank You!"
          }, (err) => {
            btn.value = 'Send Email';
            document.getElementById('msgcaption').innerText = " Email not sent :(";
            document.getElementById('msgcaption').style.color = "#e11c29d7"
          });
      });

var skill = [
        document.getElementById("html"),
        document.getElementById("css"),
        document.getElementById("jscript"),
        document.getElementById("vbnet"),
        document.getElementById("python"),
        document.getElementById("csharp"),
        document.getElementById("php")
    ];
    var andskill = [
        document.getElementById("html1"),
        document.getElementById("css1"),
        document.getElementById("jscript1"),
        document.getElementById("vbnet1"),
        document.getElementById("python1"),
        document.getElementById("csharp1"),
        document.getElementById("php1")
    ];
var perct = [45, 50, 25, 75, 65, 25, 20];
function moveall(){
    for(i=0;i<=6; i++){
        move0(i);
    }
   
}
function move0(num1) {
    let addvalue = 0;
    let id = setInterval(frame, 15);
    function frame()
    {
        if (addvalue != perct[num1]) {
            skill[num1].style.width = (addvalue + 1) + "%";
            skill[num1].innerHTML = (addvalue + 1) + "%";
            andskill[num1].style.width = (addvalue + 1) + "%";
            andskill[num1].innerHTML = (addvalue + 1) + "%";
            addvalue=(addvalue + 1);
            behavior : 'smooth';
        } else {
            clearInterval(id);       
        }    
    }
}
function copyNumber2(){
    var copyText = document.getElementById('numberphone2');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the Number: " + copyText.value);
}
function copyNumber1(){
    var copyText = document.getElementById('numberphone1');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the Number: " + copyText.value);
}
