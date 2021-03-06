const generateCards = (managerArr, engineerArr, internArr) => {
    if (!managerArr && !engineerArr && !internArr) return '';
    return `
        <section id="cards">
            ${generateManagerCard(managerArr)}
            ${generateEngineerCard(engineerArr)}
            ${generateInternCard(internArr)}
        </section>
    `;
};

const generateManagerCard = managerArr => {
    return managerArr.map(manager => {
        return `
            <div class="card">
                <div class="card-title">
                    <h2>${manager.getName()}</h2>
                    <h3><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="card-description">
                        <li><p>ID: <span>${manager.getId()}</span></p></li>
                        <li><p>Email: <span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></p></li>
                        <li><p>Office Number: ${manager.getOfficeNumber()}</p></li>
                    </ul>
                </div>  
            </div>
        `;
    }).join("");
};

const generateEngineerCard = engineerArr => {
    return engineerArr.map(engineer => {
        return `
            <div class="card">
                <div class="card-title">
                    <h2>${engineer.getName()}</h2>
                    <h3><i class="fas fa-glasses"></i> ${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="card-description">
                        <li><p>ID: <span>${engineer.getId()}</span></p></li>
                        <li><p>Email: <span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></p></li>
                        <li><p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p></li>
                    </ul>
                </div>  
            </div>
        `;
    }).join("");
};

const generateInternCard = interArr => {
    return interArr.map(intern => {
        return `
            <div class="card">
                <div class="card-title">
                    <h2>${intern.getName()}</h2>
                    <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="card-description">
                        <li><p>ID: <span>${intern.getId()}</span></p></li>
                        <li><p>Email: <span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></p></li>
                        <li><p>School: ${intern.getSchool()}</p></li>
                    </ul>
                </div>  
            </div>
        `;
    }).join("");
};

const generateSite = (managerArr, engineerArr, internArr) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Team</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                <link rel="stylesheet" href="./style.css" />
            </head>

            <body>
                <header>
                    <h1>My Team</h1>
                </header>

                <main>
                    ${generateCards(managerArr, engineerArr, internArr)}
                </main>
            </body>
        </html>
    `;
};

module.exports = generateSite;