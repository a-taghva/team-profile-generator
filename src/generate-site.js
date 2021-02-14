const generateCards = (managerArr, engineerArr, internArr) => {
    return `
        <section id="cards">
            ${generateManagerCard(managerArr)}
            ${generateEngineerCard(engineerArr)}
            ${generateInternCard(internArr)}
        </section>
    `;
};

const generateManagerCard = managerArr => {
    managerArr.map(({ name, id, email, officeNumber }) =>{
        return `
            <div class="card">
                <div class="card-title">
                    <h2>${name}</h2>
                    <h3><i class="fas fa-mug-hot"></i> Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="card-description">
                        <li><p>ID: <span>${id}</span></p></li>
                        <li><p>Email: <span>${email}<span></p></li>
                        <li><p>Office Number: ${officeNumber}</p></li>
                    </ul>
                </div>  
            </div>
        `;
    })
};

const generateEngineerCard = engineerArr => {
    engineerArr.map(({ name, id, email, github }) =>{
        return `
            <div class="card">
                <div class="card-title">
                    <h2>${name}</h2>
                    <h3><i class="fas fa-glasses"></i> Engineer</h3>
                </div>
                <div class="card-body">
                    <ul class="card-description">
                        <li><p>ID: <span>${id}</span></p></li>
                        <li><p>Email: <span>${email}<span></p></li>
                        <li><p>GitHub: ${github}</p></li>
                    </ul>
                </div>  
            </div>
        `;
    });
};

const generateInternCard = interArr => {
    interArr.map(({ name, id, email, school }) =>{
        return `
            <div class="card">
                <div class="card-title">
                    <h2>${name}</h2>
                    <h3><i class="fas fa-user-graduate"></i> Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="card-description">
                        <li><p>ID: <span>${id}</span></p></li>
                        <li><p>Email: <span>${email}<span></p></li>
                        <li><p>School: ${school}</p></li>
                    </ul>
                </div>  
            </div>
        `;
    });
};

const generateSite = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0 />
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <link rel="stylesheet" href="./style.css" />
        </head>

        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <main>

            </main>
        </body>
    </html>
    `
};