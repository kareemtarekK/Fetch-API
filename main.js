// main elements
let input = document.querySelector(".header_div input");
let fetch_repos = document.querySelector(".header_div span");
let content = document.querySelector(".content_div");









// on click span button
fetch_repos.onclick = function(){
    // calling function
    get_repos();
}






// operational function
function get_repos(){




    // check if input empty or not
    if(input.value === ''){

        // update content of content div with span 
        content.innerHTML = '<span style="font-size:17px;font-weight:bold;background-color:#eee;padding:15px;color:#808080;">please enter github username !</span>';
    } 
    




    // if input has username 
    else{



        // fetch api github.com
        fetch(`https://api.github.com/users/${input.value}/repos`)


        .then((data)=>{
            // getting repos
            let mydata = data.json();
            return mydata;
        })






        
        .then((repos)=>{
            // remove span that first placed on content
             content.innerHTML = '';

            // loop on repos
            repos.forEach((repo)=>{
              // creating div to hold name of repos , star_count and link of each repos
               let repo_div = document.createElement('div');

               // creating span to hold repo name
               let spanRepo = document.createElement('span');

               // creating class for spanRepo
               spanRepo.className = "span";

               // creating repos name
               let repoName = document.createTextNode(repo.name);

               spanRepo.appendChild(repoName);

               // creating link
               let urlLink = document.createElement('a');

               // creating name of link
               let urlName = document.createTextNode('visit');

               // add href attribute to visit repos
               urlLink.href = `https://github.com/${input.value}/${repo.name}`;

               // make link open into another page
               urlLink.setAttribute('target' , '_blank');

               urlLink.appendChild(urlName);

               // creating star span
               let starSpan = document.createElement('span');

               // creating star count 
               let starText = document.createTextNode(`star ${repo.stargazers_count}`);
               
               starSpan.appendChild(starText);

               // adding class to repo_div to use it in styling
               repo_div.className = "ALLDATA";

               repo_div.appendChild(spanRepo);

               repo_div.appendChild(urlLink);

               repo_div.appendChild(starSpan);

               content.appendChild(repo_div);

            })



        })


    }
    
}