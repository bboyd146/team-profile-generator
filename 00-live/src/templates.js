const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


function createHTML(employees) {
    let html = startHtml();
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].role === "Manager") {
            html = html + managerC(employees[i]);
        }
        else if (employees[i].role === "Engineer") {
            html = html + engineerC(employees[i]);
        }
        else { html = html + internC(employees[i]); }
    }
    html = html + finishHtml(); 
    return html; 
}

function startHtml () {
    const html = 
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <section class="hero is-danger">
        <div class="hero-body">
            <p class="title has-text-centered">
                My Team
            </p>
        </div>
    </section>
    <main class="section">
        <div class="tile is-ancestor is-mobile is-vcentered is-justify-content-center">
    `

    return html;
}

function finishHtml() {
    const html =
        `
        </div>
    </main>
</body>

</html>
`
    return html;
}



function engineerC (employees) {
const html =
`<div class="card">
    <header class="media-content has-background-link">
        <p class="title">
            ${employees.name}
        </p>
        <p class="subtitle">
            ${employees.role}
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            <table class="table is-bordered">
                <tbody>
                    <tr>
                        <td>id:${employees.id}</td>
                    </tr>
                    <tr>
                        <td>email:<a href = "mailto: ${employees.email}">${employees.email}</a></td>
                    </tr>
                    <tr>
                        <td>github: <a href="https://github.com/${employees.github}">${employees.github}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
`;
return html;
}

function internC () {
    return `<div class="card">
    <header class="media-content has-background-link">
        <p class="title">
        ${Intern.name}
        </p>
        <p class="subtitle">
        ${Intern.role}
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            <table class="table is-bordered">
                <tbody>
                    <tr>
                        <td>id:${Intern.id}</td>
                    </tr>
                    <tr>
                    <td>email:<a href = "mailto: ${Intern.email}">${Intern.email}</a></td>
                    </tr>
                    <tr>
                        <td>school:${Intern.school}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
    `;
}

function managerC () {
return `<div class="card">
<header class="media-content has-background-link">
    <p class="title">
        ${Manager.name}
    </p>
    <p class="subtitle">
        ${Manager.role}
    </p>
</header>
<div class="card-content">
    <div class="content">
        <table class="table is-bordered">
            <tbody>
                <tr>
                    <td>id: ${Manager.id}</td>
                </tr>
                <tr>
                <td>email:<a href = "mailto: ${Manager.email}">${Manager.email}</a></td>
                </tr>
                <tr>
                    <td>office number: ${Manager.officeNumber}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</div>
`;
}

module.exports = { generatedTeam : (employees) => createHTML(employees)}