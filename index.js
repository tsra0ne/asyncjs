console.log('Before');

// getUser(1, (user) => {
//     console.log(`User: ${user}`);

//     getRepositories(user.githubUserName, (repos) => {
//         console.log(`repos of user ${user.githubUserName} are ${repos}`);

//         getCommits(repos[0], (commits) => {
//             console.log(`commits of ${repos[0]} are ${commits}`);
//         });
//     });
// });

// getUser(1)
//     .then(user => getRepositories(user.githubUserName))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(`commits for the repo ${commits}`))
//     .catch(err => console.log('Error: ' + err.message))

async function getData() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.githubUserName);
        const commits = await getCommits(repos[0]);
        console.log('Commits: ', commits)
    } catch (err) {
        console.log('Error: ', err.message);
    }
}

getData()

// If all promises get resolved the result will be array
// Promise.all([getUser(1), getCommits('repo1')])
//     .then(result => console.log(result))

// No response if any promise fails when using Promise.all
// Promise.all([getUser(1), getRepositories('tsra0ne')])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error: ', err.message))

// race will return if any of the one promise resolves
// Promise.race([getUser(1), getRepositories('tsra0ne')])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error: ', err.message))

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting user from database...');
            resolve({ id: id, githubUserName: 'tsra0ne' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`getting repos of ${username} from database...`);
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error('No repos found'));
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting commits for repo from database...');
            resolve(['1st', '2nd', '3rd']);
        }, 2000);
    });
}

