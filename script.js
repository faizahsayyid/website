const projectShowBtns = document.querySelectorAll("button[data-project-show]");

projectShowBtns.forEach((projectShowBtn) => {
    const projectId = projectShowBtn.dataset.projectShow;
    const description = document.querySelector(`div[data-project-description='${projectId}']`);
    projectShowBtn.addEventListener("click", () => {
        projectShowBtn.textContent = projectShowBtn.textContent == "Show More" ? "Show Less" : "Show More";
        description.classList.toggle("hide");
    })
});


const intro = document.getElementById("intro");
const projectHightLights = document.getElementById("project-hightLights");



// import { projects } from './assets/data/projects.js'

// const projectAnimationCallback = (entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("project-animation")
//             observer.unobserve(entry.target)
//         }
//     })
// }

// const options = {}

// const projectAnimationObserver = new IntersectionObserver(projectAnimationCallback, options)

// var artSlideCounter = 1;

// $(document).ready(function(){

//     projectAnimationObserver.observe($('#project-list-title').get(0))
//     projectAnimationObserver.observe($('#art').get(0))

//     projects.map((project, index) => {
//         if (project.highlight) {
//             $('#project-highlights').append(
//             `<div class="project" id="project-${index}">
//                 <h2 class="project-title">${project.title}</h2>
//                 <h3 class="project-summary">${project.summary}</h3>
//                 <div class="project-content">
//                     <div class="project-tool-list" id="project-tool-${index}">
//                         <h4 class="project-subtitle">Tools:</h4>
//                     </div>
//                     <div class="project-link-list" id="project-link-${index}">
//                         <a href="${project.githubRepoURL}" class="project-link-item project-github">GitHub Repo</a>
//                     </div>
//                     <button class="show-project-description-btn" id="project-show-btn-${index}" type="button">Show More</button>
//                     <div class="project-description hide" id="project-description-${index}">
//                         <video class="project-video" width="${project.video.width}" height="${project.video.height}" loop controls>
//                             <source src="${project.video.path}" type="video/mp4">
//                         </video>
//                         ${project.description}
//                     </div>
//                 </div>
//             </div>`
//             )
//             project.tools.map((tool) => {
//                 $(`#project-tool-${index}`).append(`<span class="project-tool-item">${tool}</span>`)
//             })
//             project.otherLinks.map((link) => {
//                 $(`#project-link-${index}`).append(`<span></span><a href="${link.link}" class="project-link-item">${link.name}</a>`)
//             })
//             $(`#project-show-btn-${index}`).on('click', () => showProjectDescription(index))

//             projectAnimationObserver.observe($(`#project-${index}`).get(0))
//         }
//     })

//     // $('.art-slide').each(function(index){
//     //     if(index === 0) {
//     //         $(this).show()
//     //     } else {
//     //         $(this).hide()
//     //     }
//     // })

//     // setInterval(() => {
        
//     //     $('.art-slide').each(function(index){
//     //         if(index === artSlideCounter) {
//     //             $(this).show().addClass('art-animation')
//     //         } else {
//     //             $(this).hide().removeClass('art-animation')
//     //         }
//     //     })

//     //     $('.dot').each(function(index){
//     //         if(index === artSlideCounter) {
//     //             $(this).addClass('dot-active')
//     //         } else {
//     //             $(this).removeClass('dot-active')
//     //         }
//     //     })

//     //     if (artSlideCounter < 2) artSlideCounter++
//     //     else artSlideCounter = 0
//     // }, 4000)
// })

// projects.map((project, index) => {
//     $('#project-page').append(
//         `<div class="project" id="project-p-${index}">
//             <h2 class="project-title">${project.title}</h2>
//             <h3 class="project-summary">${project.summary}</h3>
//             <div class="project-content">
//                 <div class="project-tool-list" id="project-tool-p-${index}">
//                     <h4 class="project-subtitle">Tools:</h4>
//                 </div>
//                 <div class="project-link-list" id="project-link-p-${index}">
//                     <a href="${project.githubRepoURL}" class="project-link-item project-github">GitHub Repo</a>
//                 </div>
//                 <button class="show-project-description-btn" id="project-show-btn-p-${index}" type="button">Show More</button>
//                 <div class="project-description hide" id="project-description-p-${index}">
//                     <video class="project-video" width="${project.video.width}" height="${project.video.height}" autoplay loop muted>
//                         <source src="${project.video.path}" type="video/mp4">
//                     </video>
//                     ${project.description}
//                 </div>
//             </div>
//         </div>`
//     )
//     project.tools.map((tool) => {
//         $(`#project-tool-p-${index}`).append(`<span class="project-tool-item">${tool}</span>`)
//     })
//     project.otherLinks.map((link) => {
//         $(`#project-link-p-${index}`).append(`<span></span><a href="${link.link}" class="project-link-item">${link.name}</a>`)
//     })
//     $(`#project-show-btn-p-${index}`).on('click', () => showProjectDescriptionForPage(index))
// })


// function showProjectDescription(index) {
//     if($(`#project-description-${index}`).is(':visible')){
//         $(`#project-show-btn-${index}`).text('Show More')
//         $(`#project-${index}`).css('height', '-=90vh')
//         $(`#project-highlights`).css('height', '-=90vh')
//     } else {
//         $(`#project-show-btn-${index}`).text('Show Less')
//         $(`#project-${index}`).css('height', '+=90vh')
//         $(`#project-highlights`).css('height', '+=90vh')
//     }
    
//     $(`#project-description-${index}`).toggle()
// }

// function showProjectDescriptionForPage(index) {
//     if($(`#project-description-p-${index}`).is(':visible')){
//         $(`#project-show-btn-p-${index}`).text('Show More')
//         $(`#project-p-${index}`).css('height', '-=90vh')
//         $(`#project-page`).css('height', '-=90vh')
//     } else {
//         $(`#project-show-btn-p-${index}`).text('Show Less')
//         $(`#project-p-${index}`).css('height', '+=90vh')
//         $(`#project-page`).css('height', '+=90vh')
//     }
    
//     $(`#project-description-p-${index}`).toggle()
// }