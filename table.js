let item = [
    {
        id:1,
        name:"Java",
        img:"java.jpg",
        content:"Java is powering the innovation behind our digital world. Harness this potential with Java resources for student coders, hobbyists, developers, and IT leaders.",
        duration:"60 Days",
        Fee:10000,
        type:"Development",
    },
    {
        id:2,
        name:"Oracle",
        img:"oracle.avif",
        content:"Oracle is a database management system (DBMS) used to store, manage, and retrieve data. It's also used for enterprise applications, cloud computing, and other software products. In essence, Oracle is used to build and manage databases for various business applications and systems.",
        duration:"60 Days",
        Fee:25000,
        type:"Database",
    },
    {
        id:3,
        name:"Phyton",
        img:"phyton.png",
        content:"Python is a computer programming language often used to build websites and software, automate tasks, and analyze data. Python is a general-purpose language, used to create various programmes and isn't specialised for any specific problems.",
        duration:"80 Days",
        Fee:35000,
        type:"Design",
    },
    {
        id:4,
        name:"Angular JS",
        img:"angular.webp",
        content:"AngularJS is an open source Javascript framework designed to build dynamic websites and rich internet applications (RIAs). The framework emerged in 2009 and is currently managed by Google. It extends the functionalities of HTML markup language as it goes beyond static sites to create interactive web apps.",
        duration:"45 Days",
        Fee:30000,
        type:"Implementation",
    },
    {
        id:5,
        name:"React JS",
        img:"react.png",
        content:"AngularJS is an open source Javascript framework designed to build dynamic websites and rich internet applications (RIAs). The framework emerged in 2009 and is currently managed by Google. It extends the functionalities of HTML markup language as it goes beyond static sites to create interactive web apps.",
        duration:"45 Days",
        Fee:15000,
        type:"Design",
    },
    {
        id:6,
        name:"Photoshop",
        img:"photo.webp",
        content:"AngularJS is an open source Javascript framework designed to build dynamic websites and rich internet applications (RIAs). The framework emerged in 2009 and is currently managed by Google. It extends the functionalities of HTML markup language as it goes beyond static sites to create interactive web apps.",
        duration:"45 Days",
        Fee: 18000,
        type:"Creation",
    }, 
]
let body = document.querySelector("tbody")

let x = ""

for(i = 0; i<item.length; i++){

    x += `<tr>
            <td>${item[i].id}</td>
            <td>${item[i].name}</td>
            <td><img src="./Images/${item[i].img}" alt="" style="width: 50px; height: 50px;"></td>
            <td>${item[i].content}</td>
            <td>${item[i].duration}</td>
            <td>${item[i].Fee}/-</td>
            <td>${item[i].type}</td>
        </tr>`
}
body.innerHTML = x