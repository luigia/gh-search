// init gh
const github = new GitHub
// init ui
const ui = new UI

// search input
const searchUser = document.querySelector('#search-user')

// search input event listener
searchUser.addEventListener('keyup', (e) => {
  // get the text that's typed in
  const userText = e.target.value

  if (userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // show profile
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
  } else {
    // clear the profile
    ui.clearProfile()
  }
})
