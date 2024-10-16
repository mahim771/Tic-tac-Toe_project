const APIURL = "https://api.github.com/users/";

const main = document.querySelector('.main');
const searchBox = document.querySelector('#search')

const getUserData = async(username) =>
{
  const res = await fetch(APIURL+username);
  const data = await res.json();
 const Div = document.createElement('div');

 Div.classList.add('card');
 Div.innerHTML = `

  <div>
        <img src=${data.avatar_url} alt="">
      </div>
      <div class="info">
        <div class="user-info">
          <h1>${data.login}</h1>
          <h3>${data.bio}</h3>
        </div>
        <ul class="git-info">
          <li>###<strong>${data.followers}Followers</strong></li>
          <li>###<strong>${data.following}Following</strong></li>
          <li>###<strong>${data.public_repos}Repo</strong></li>
        </ul>
        <div class="repos">
        
        </div>
      </div>
 `;

 main.appendChild(Div);
 getRepos(username)
}


const getRepos = async (username) =>
{
  const repos = document.querySelector('.repos');

  const res = await fetch(APIURL+username + '/repos');
  const data = await res.json();
  data.forEach(item => {

    const element = document.createElement('a');
    element.classList.add('repo');
    element.innerText = item.name;
    element.href = item.html_url;
    element.target = '_blank',
    repos.appendChild(element);
    
  });


}
function formSubmit()
{
  if(searchBox.value !== '')
  {
    getUserData(searchBox.value);
    searchBox.value === '';
  }
  return false;
}

searchBox.addEventListener('focusout',
  formSubmit()
)