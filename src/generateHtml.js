

function htmlTemplate(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    
        <header class="nav-bar">
        <h1>My Team</h1>
         </header>
    
         <div class="container">

         <div class="row">
    
           
             ${selectCard(employees)}

             </div>

             </div>

          

           
             
     </body>
     </html>`
 }
 
 function selectCard(employees) {
    
   return employees.map(function(e) {
    let role = e.getRole()
     switch (role) {
       case "Manager":
         return createManagerCards(e)
         break;
       case "Engineer":
         return createEngineerCards(e)
         break;
         case "Intern":
           return createInternCards(e)
     }
     console.log(e)
   }).join("")
 }
 
 function createManagerCards(manager) {
    return `  
    <div class="card-01">
    <div class="card-header">
        <h3>${manager.getName()}</h3>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>Id: ${manager.getId()}</p>
        <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
 </div> 
 </div>

 `
 }
 
 function createEngineerCards(engineer) {
     return ` 
     <div class="card-01">
     <div class="card-header">
         <h3>${engineer.getName()}</h3>
         <h3>${engineer.getRole()}</h3>
     </div>
     <div class="card-body">
         <p>Id: ${engineer.getId()}</p>
         <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
         <p>GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
  </div>
  </div> `
 }
 
 function createInternCards(intern) {
     return `

     <div class="card-01">
     <div class="card-header">
         <h3>${intern.getName()}</h3>
         <h3>${intern.getRole()}</h3>
     </div>
     <div class="card-body">
         <p>Id: ${intern.getId()}</p>
         <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
         <p>School: ${intern.getSchool()}</p>
  </div> 
  </div>
  `
 }
 
 
 module.exports = htmlTemplate




