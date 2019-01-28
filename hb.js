function settingUpProjects() {
    var projects = document.querySelector('#players').innerHTML;
    var template = Handlebars.compile(projects);
    for (index in PROJECTS.projects) {
        let project = PROJECTS.projects[index];
        var html = template({
            index: index,
            project: project
        });
        document
            .querySelector('#projectsTemplate')
            .insertAdjacentHTML('beforeend', html);
    }
}