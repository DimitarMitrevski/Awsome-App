export default function ({ req, store, redirect }) {
  let loggedIn = Object.keys(store.state.user).length > 0
  if (loggedIn) {
    redirect('/users')
  } else {
    redirect('/login')
  }
  // if (Object.keys(store.state.user).length == 0) {
  //   redirect('/login')
  // }
  // if (Object.keys(store.state.user).length > 0) {
  //   redirect('/users')
  // }
}
