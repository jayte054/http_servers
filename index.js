// const http = require("http")

// const port = 2000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "content-type": "application/json"
//     })
//     res.end(JSON.stringify({
//         id: 1,
//         name: "justin"
//     }))
// })
// server.listen(port, () => {
//     console.log("server is listening on port; ", port)
// })

// const http = require("http")

// const server = http.createServer((req, res ) => {
//                 res.writeHead(200, {
//                     "Content-Type":"application/json"
//                 })
//                 res.end(JSON.stringify({
//                     "purpose":"greatness",
//                     "candidate": "justin ewelike"
//                 }))
// })

// const port = 2000

// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`)
// })

// const http  = require("http")

// const server = http.createServer((req, res) => {
//     res.statusCode=200
//     res.setHeader("Content-Type", "application/json")
//     if(req.url === "/idea") {
//         res.end(JSON.stringify({
//             "purpose":"greatness",
//             "candidate":"Justin Ewelike"
//         }))
//     } else if (req.url === "/goal") {
//         res.statusCode=200
//         res.setHeader("content-Type", "text/html")
//         res.write("<html>")
//         res.write("<ul>")
//         res.write("<li>Justin Ewelike</li>")
//         res.write("<li>To have a legacy that will last beyon a dynasty</li>")
//         res.write("</ul>")
//         res.write("</html>")
//         res.end()
//     } else{
//         res.statusCode=400
//         res.setHeader("Content-Type", "text/html")
//         res.write("page not found")
//         res.end()
//     }
// })

// const port = 2000

// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`)
// })

// const http = require("http")

// const team = [
//     {
//         "id":0,
//         "candidate": "justin ewelike",
//         "purpose": "greatness"
//     },
//     {
//         "id":1,
//         "candidate": "dogubo joshua",
//         "purpose": "peace of mind"
//     },
//     {
//         "id":2,
//         "candidate": "osiobe ajiri",
//         "purpose": "purpose"
//     }
// ]

// const server = http.createServer((req, res) => {
//     const items = req.url.split("/")
//     console.log(items)

//     // the above line of code will split the url into an array such that it appears as ["", "team", "index"]
//     // hence team[1] = team, team[2] = index

//     // the next line of code with the use of the if method, 
//     // first we insert the condition that ensures that the index that contains the url is targeted
//     if(items[1] === "idea") {
//         res.writeHead(200, {
//             "Content-Type":"application/json"
//         })
//     //within the same if statement, we insert another conditions that ensures that the length of the url equals  
//     // the length of the array we split the url into
//         if(items.length === 3) {
//     // setting the index of 2 from the split method to a constant, such that it can be referred to dynamically    
//             const teamIndex = Number(items[2])
//     // setting a response such that the response gotten is a function of the requested index from the database
//             res.end(JSON.stringify(team[teamIndex]))
//         } else {
//     // within the else statement here, if the item's length isn't equal to 3, then the entire array of team 
//     // will be returned
//             res.end(JSON.stringify({team}))
//         }
//     } else if (items[1] === "goal") {
//         res.writeHead(200, {
//             "Content-Type":"text/html"
//         })
//         res.write("<html>")
//         res.write("<ul>")
//         res.write("<li>Justin Ewelike</li>")
//         res.write("<li>To have a legacy that will last beyond a dynasty </li>")
//         res.write("</ul>")
//         res.write("</html>")
//         res.end()
//     }
// })

// const port = 2000

// server.listen(port, () => {
//     console.log(`server is listening on port; ${port}`)
// })

// const http = require("http")

// const team = [
    // {
    //     "id": 0,
    //     "candidate":"Justin Ewelike",
    //     "purpose":"greatness"
    // },
    // {
    //     "id":1,
    //     "candidate": "dogubo joshua",
    //     "purpose": "peace of mind",
    // },
    // {
    //     "id": 2,
    //     "candidate": "Ajiri Osiobe",
    //     "purpose": "purpose"
    // }
// ]

// const server = http.createServer()

// server.on("request", (req, res) => {
//     const item = req.url.split("/")
//     console.log(item)
//     if(item[1]=== "idea") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json")
//         if (item.length === 3) {
//             const teamIndex = Number(item[2])
//             res.end(JSON.stringify(team[teamIndex]))
//         } else {
//             res.end(JSON.stringify(team))
//         }
//     } else if (item[1] === "goal") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<ul>")
//         res.write("<li>Site: NaijaCorpHub</li>")
//         res.write("<li>Agenda: Create a hub that will influence iter-relations and self improvement within Nigerians</li>")
//         res.write("</ul>")
//         res.write("</html>")
//         res.end()
//     }
    

// })

// const port = 2000
// server.listen(port, ()=> {
//     console.log(`server is listening on port ${port}`)
// })



// const http = require("http")

// const team = [
//     {
//         "id" : 0,
//         "name": "justin ewelike",
//         "purpose": "greatness"
//     },
//     {
//         "id": 1,
//         "name": "dogubo joshua",
//         "purpose": "peace of mind"
//     },
//     {
//         "id": 2,
//         "name": "ajiri osiobe",
//         "purpose": "purpose"
//     }
// ]

// const server = http.createServer()
// server.on("request", (req, res) => {
//     const item = req.url.split("/")
//     console.log(item)
//     if (item[1] === "idea") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json")
//         if(item.length === 3) {
//             const teamIndex = Number(item[2])
//             res.write(JSON.stringify(team[teamIndex]))
//             res.end()
//         } else {
//             res.end(JSON.stringify(team))
//         }
//     } else if (item[1] === "goal") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<ul>")
//         res.write("<li> NaijaCorpHub </li>")
//         res.write("<li> Creating a space and self improving space for corp members </li>")
//         res.write("</ul>")
//         res.write("</html>")
//         res.end()
//         }
//     }
// )

// const port = 2000
// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`)
// })

// const http = require("http")

// const team = [
//     {
//         "id": 0,
//         "candidate":"Justin Ewelike",
//         "purpose":"greatness"
//     },
//     {
//         "id":1,
//         "candidate": "dogubo joshua",
//         "purpose": "peace of mind",
//     },
//     {
//         "id": 2,
//         "candidate": "Ajiri Osiobe",
//         "purpose": "purpose"
//     }
// ]

// const server = http.createServer((req, res) => {
//     const item = req.url.split("/")
//     if (item[1] === "idea") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json")
//         if(item.length === 3) {
//             const teamIndex = Number(team[2])
//             res.write("team-member")
//             res.write(JSON.stringify(team[teamIndex]))
//             res.end()
//         } else {
//             res.end(JSON.stringify(team))
//         }
//     } else if (item[1] === "goal") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html")
//         res.write("<html>")
//         res.write("<ul>")
//         res.write("<li> NaijaCorpHub </li>")
//         res.write("<li> Creating a space and self improving space for corp members </li>")
//         res.write("</ul>")
//         res.write("</html>")
//         res.end()
//     }
// })

// const port = 2000 
// server.listen(port, () => {
//     console.log(`servere is listening on port ${port}`)
// }

const http = require("http")
const { json } = require("stream/consumers")
const { isConstructorDeclaration } = require("typescript")

const team = [
    {
        "candidate" : "Justin Ewelike",
        "purpose" : "greatness",
    },
    {
        "candidate" : "Dogubo Joshua",
        "purpose" : "peace of mind"
    },
    {
        "candidate" : "Ajir Osiobe",
        "purpose" : "Purpose"
    }
]

const NewContent = [
    // {
    //     "location":"benin"
    // }
]

const server = http.createServer()

server.on("request", (req, res) => {
    const item = req.url?.split("/")
    if (req.method === "POST" && item[1]==="idea") {
        req.on("data", (data) => {
            const member = data.toString()
            console.log("Request:", member)
            team.push(JSON.parse(member))
        })
    }
    else if ( req.method === "GET" && item[1] === "idea") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        if(item.length === 3) {
            const teamIndex = Number(item[2])
            res.write(JSON.stringify(team[teamIndex]))
            res.end()
        } else {
            res.write(JSON.stringify(team))
        }
    } else if ( req.method === "GET" && item[1] === "goal") {
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<html>")
        res.write("<ul>")
        res.write("<li> website: decagonlearn </li>")
        res.write("<li> purpose: to enable learning at decagon be dutiful and centered to decadevs</li>")
        res.write("</ul>")
        res.write("</html>")
        res.end()
    } 
    else if (req.method === "POST" && item[1] === "drive") {
        req.on("data", (data) => {
            const owner = data.toString()
            console.log("Request:", owner)
            NewContent.push(JSON.parse(owner))
        })
    } else if (req.method === "GET" && item[1] === "drive") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(NewContent))
    }
})

const port = 2000
server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})