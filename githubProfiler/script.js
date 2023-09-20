const searchBar = document.getElementById('searchTerm');
const searchButton = document.getElementById('searchButton');
const divSearch = document.getElementById('search');
const divProfile = document.getElementById('profile');

let userInfo = [];
let userRepos = [];
let userGists = [];
let userFollowers = [];
let userFollowing = [];


searchButton.addEventListener('click', async () => {
    const searchTerm = searchBar.value;
    if (searchTerm) {
        await getUser(searchTerm);
        await getRepos(searchTerm);
        await getFollowers(searchTerm);
        await getFollowing(searchTerm);
        console.log(userInfo);
        console.log(userRepos);
        console.log(userFollowers);
        console.log(userFollowing);
        showUser();
    } else {
        // TODO: Show error message
    }
});


async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    userInfo = data;
}

function showUser() {
    divSearch.style.display = 'none';
    divProfile.style.display = 'block';

    setAField("profile-login", userInfo?.login ?? "N/A");
    setAField("profile-name", userInfo?.name ?? "N/A");
    setImage("profile-avatar", userInfo?.avatar_url ?? "N/A")
    setAField("profile-bio", userInfo?.bio ?? "N/A");
    setAField("profile-company", userInfo?.company ?? "N/A");
    setAField("profile-location", userInfo?.location ?? "N/A");
    setAField("profile-email", userInfo?.email ?? "N/A");
    setAField("profile-twitter", userInfo?.twitter_username ?? "N/A");
    setHref("profile-twitter", userInfo?.twitter_username ? `https://twitter.com/${userInfo?.twitter_username}` : "#")
    setAField("profile-website", userInfo?.blog ?? "N/A");
    setHref("profile-website", userInfo?.blog ?? "N/A");
    setAField("profile-public-repos", userInfo?.public_repos ?? "N/A");
    setAField("profile-public-gists", userInfo?.public_gists ?? "N/A");
    setAField("profile-followers", userInfo?.followers ?? "N/A");
    setAField("profile-following", userInfo?.following ?? "N/A");
    setAField("profile-created-at", userInfo?.created_at ?? "N/A");
    setAField("profile-updated-at", userInfo?.updated_at ?? "N/A");
    setAField("profile-id", userInfo?.id ?? "N/A");
    setAField("profile-admin", userInfo?.site_admin ?? "N/A");

    const repos = document.getElementById("profile-repos");
    repos.innerHTML = "";
    for (let repo of userRepos) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `https://github.com/${userInfo.login}/${repo.name}`;
        a.innerHTML = repo.name;
        a.target = "_blank";
        li.appendChild(a);
        repos.appendChild(li);
    }

    const gists = document.getElementById("profile-gists");
    gists.innerHTML = "";
    for (let gist of userGists) {
        const li = document.createElement("li");
        li.innerHTML = gist.description;
        gists.appendChild(li);
    }

    const followers = document.getElementById("profile-followers");
    followers.innerHTML = "";
    for (let follower of userFollowers) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `https://github.com/${follower.login}`;
        a.innerHTML = follower.login;
        a.target = "_blank";
        li.appendChild(a);
        followers.appendChild(li);
    }

    const following = document.getElementById("profile-following");
    following.innerHTML = "";
    for (let follow of userFollowing) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `https://github.com/${follow.login}`;
        a.innerHTML = follow.login;
        a.target = "_blank";
        li.appendChild(a);
        following.appendChild(li);
    }
}

function setAField(cssClass, value) {
    const elements = document.getElementsByClassName(cssClass);
    for (let e of elements) {
        e.innerHTML = value;
    }
}

function setImage(cssClass, url) {
    const elements = document.getElementsByClassName(cssClass);
    for (let e of elements) {
        e.src = url;
    }
}

function setHref(cssClass, url) {
    const elements = document.getElementsByClassName(cssClass);
    for (let e of elements) {
        e.href = url;
    }
}

/*
{
  "login": "BlasterWhite",
  "id": 38408069,
  "node_id": "MDQ6VXNlcjM4NDA4MDY5",
  "avatar_url": "https://avatars.githubusercontent.com/u/38408069?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/BlasterWhite",
  "html_url": "https://github.com/BlasterWhite",
  "followers_url": "https://api.github.com/us>ers/BlasterWhite/followers",
  "following_url": "https://api.github.com/users/BlasterWhite/following{/other_user}",
  "gists_url": "https://api.github.com/users/BlasterWhite/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/BlasterWhite/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/BlasterWhite/subscriptions",
  "organizations_url": "https://api.github.com/users/BlasterWhite/orgs",
  "repos_url": "https://api.github.com/users/BlasterWhite/repos",
  "events_url": "https://api.github.com/users/BlasterWhite/events{/privacy}",
  "received_events_url": "https://api.github.com/users/BlasterWhite/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Matéo G",
  "company": null,
  "blog": "http://193.168.146.103:8080/",
  "location": "Brittany France",
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": "_BlasterWhite_",
  "public_repos": 28,
  "public_gists": 0,
  "followers": 2,
  "following": 7,
  "created_at": "2018-04-15T20:31:26Z",
  "updated_at": "2023-09-20T08:01:00Z"
}
 */

async function getRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    userRepos = await response.json();
}

async function getGists(username) {
    const response = await fetch(`https://api.github.com/users/${username}/gists`);
    userGists = await response.json();
}

async function getFollowers(username) {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    userFollowers = await response.json();
}

async function getFollowing(username) {
    const response = await fetch(`https://api.github.com/users/${username}/following`);
    userFollowing = await response.json();
}