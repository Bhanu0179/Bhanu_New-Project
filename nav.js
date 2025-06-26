let menus = [
    {
        name:"Home",
        url:"index.html",
        sub:[]
    },
    {
        name:"About",
        url:"about.html",
        sub:[]
    },
    {
        name:"Services",
        url:"services.html",
        sub:[
            {
                name:"Web Design",
                url:"webdesign.html",
            },
            {
                name:"Phyton",
                url:"phyton.html",
            },
        ]
        
    },
    {
        name:"Blog",
        url:"blog.html",
        sub:[
            {
                name:"Course Fee",
                url:"fee.html",
            },
            {
                name:"Course Content",
                url:"content.html",
            },
        ]
        
    },
    {
        name:"Contact",
        url:"contact.html",
        sub:[]
    },
]

let list = document.querySelector("#list")
let x = ""
for(i = 0; i<menus.length; i++){
    if(menus[i].sub.length === 0){
    x += `  <li class="nav-item">
                <a class="nav-link text-white" href="${menus[i].url}">${menus[i].name}</a>
            </li>`
    }else{
        x += `<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="${menus[i].url}" role="button" data-bs-toggle="dropdown">${menus[i].name}</a>
        <ul class="dropdown-menu">` 
        for(j = 0; j<menus[i].sub.length; j++){
        x += `<li><a class="dropdown-item text-white" href="${menus[i].sub[j].name}">${menus[i].sub[j].name}</a></li>`
        }
        x += `</ul>
                </li> `
    }
} 
list.innerHTML = x  
