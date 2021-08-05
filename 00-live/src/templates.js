

function engineerC (){
return
`<div class="card">
    <header class="media-content has-background-link">
        <p class="title">
            ${Engineer.name}
        </p>
        <p class="subtitle">
            ${Engineer.role}
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            <table class="table is-bordered">
                <tbody>
                    <tr>
                        <td>id:${Engineer.id}</td>
                    </tr>
                    <tr>
                        <td>email:<a href = "mailto: ${Engineer.email}">${Engineer.email}</a></td>
                    </tr>
                    <tr>
                        <td>github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
`;
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