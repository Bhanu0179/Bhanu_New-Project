let courses = [
    {
        id:1,
        name:"Angular",
        img:"angular.webp",
        content:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications. Angular is written in TypeScript.",
        duration:"60hrs",
        Fee: 35000

    },
    {
        id:2,
        name:"Microsoft Azure",
        img:"Azure.png",
        content:"Microsoft Azure is a cloud computing platform. Azure offers a range of cloud services, including computing, analytics, storage, networking, and AI. Customers choose from these services to develop and scale new applications, or run their existing applications, in the cloud.",
        duration:"120hrs",
        Fee: 45000

    },
    {
        id:3,
        name:"React Js",
        img:"reactjs.webp",
        content:"React.js is primarily a front-end JavaScript library. It's used to build user interfaces and interactive elements in web applications, operating within the browser. While React can interact with back-end services to fetch data, it's not a backend technology itself. React.js is primarily a front-end JavaScript library.",
        duration:"60hrs",
        Fee: 40000

    },
    {
        id:4,
        name:"Java Script",
        img:"javascript.webp",
        content:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. JavaScript is a scripting language. hat enables you to create dynamically updating content.",
        duration:"45hrs",
        Fee: 45000

    },
    {
        id:5,
        name:"Node Js",
        img:"nodejs.webp",
        content:"Node. js is easily employed as a server-side proxy, where it can handle a large amount of simultaneous connections in a nonblocking manner. It's useful for proxying different services with varying response times, or collecting data from multiple source points.",
        duration:"60hrs",
        Fee: 55000

    },
    {
        id:6,
        name:"Phyton",
        img:"phyton.png",
        content:"Python is a computer programming language often used to build websites and software, automate tasks, and analyze data. Python is a general-purpose language, used to create various programmes and isn't specialised for any specific problems.",
        duration:"60hrs",
        Fee: 35000

    },
    {
        id:7,
        name:"Oracle",
        img:"oracle.avif",
        content:"Oracle is a database management system (DBMS) used to store, manage, and retrieve data. It's also used for enterprise applications, cloud computing, and other software products. In essence, Oracle is used to build and manage databases for various business applications and systems.",
        duration:"60hrs",
        Fee: 55000

    },
    {
        id:8,
        name:"Power BI",
        img:"power.jpg",
        content:"Power BI is a business analytics service and platform used for visualizing data and sharing insights within an organization. It enables users to connect to various data sources, clean and transform the data, and create interactive dashboards and reports. Essentially.",
        duration:"180hrs",
        Fee: 85000

    },
    {
        id:9,
        name:"Photoshop",
        img:"photo.webp",
        content:"Adobe Photoshop is a software application for image editing and photo retouching for use on Windows or MacOS computers. Photoshop offers users the ability to create, enhance, or otherwise edit images, artwork, and illustrations,ability to creat, nhance, or otherwise edit images",
        duration:"60hrs",
        Fee: 35000

    },
]   

    let item = document.querySelector("#item")

    let a = ""
    for(i = 0; i<courses.length; i++){
        a +=    `<div class="col-md-4 col-sm-12 col-12 mb-3">
                    <div class="card">
                        <img src="./Images/${courses[i].img}" alt="" class="w-100">
                        <div class="card-body">
                            <h2 class="card-title text-danger">${courses[i].name}</h2>
                            <p class="card-text text-info text-capitalize text-justify xyz">${courses[i].content}</p>
                            <button type="button" class="btn btn-primary bg-primary">Duration: ${courses[i].duration}</button>
                            <button type="button" class="btn btn-warning text-white">Fee: ${courses[i].Fee}/-</button>
                        </div>
                    </div>
                </div>`
    }
    item.innerHTML = a