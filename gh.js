class GitHub {
  constructor() {
    this.client_id = '6703bd106a2c76970578';
    this.client_secret = 'ed5dcfd97abfcfd39a4707ddcf7e28668b6b62b2';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  // get user method
  async getUser(user) {
    const profileResp = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const repoResp = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResp.json()
    const repos = await repoResp.json()

    return {
      profile,
      repos
    }
  }
}