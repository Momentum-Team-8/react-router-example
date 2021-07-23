import dayjs from 'dayjs'
import { nanoid } from 'nanoid'

export function requestLogin (username, password) {
  return fakeAuthentication(username, password)
}

export function requestUser (token, username) {
  return fakeUserRequest(token, username)
}

function fakeAuthentication (username, password) {
  // here I am faking an api response that
  // gives me a fake authentication token
  return new Promise((resolve, reject) => {
    // checking for the presence of a username and password
    // before returning a fake token
    if (username !== '' && password !== '') {
      resolve({ auth_token: 'token123456789' })
    }
    // throw an arrow if something goes wrong
    // like if the user doesn't exist or the password
    // is incorrect...
    reject(new Error('Authentication failed!'))
  })
}

function fakeUserRequest (token, username) {
  // here I am faking an api response that
  // gives me a user object
  return new Promise((resolve, reject) => {
    if (token && username) {
      console.log(username)
      resolve(
        // this is a fake user object
        {
          id: 1,
          username: username,
          // I am using a lirbary called dayjs that
          // makes working with datetime in JS a litte simpler
          created_at: dayjs('2021-07-22'),
          avatar_url: 'https://tinyurl.com/mwkjx4nh',
          bio: 'Doggo ipsum long bois adorable doggo dat tungg tho you are doing me a frighten heckin angery woofer fat boi, porgo many pats wrinkler tungg heckin angery woofer, very good spot shooberino borking doggo fat boi. Noodle horse heck heckin, floofs.',
          followers: [
            {
              // I am using a library called 'nanoid'
              // to create fake ids for my objects that are
              // five characters long.
              id: nanoid(5),
              username: 'doggocroissant',
              avatar_url: 'https://tinyurl.com/43rr9s5c'
            },
            {
              id: nanoid(5),
              username: 'dogedog',
              avatar_url: 'https://tinyurl.com/52v3htwk'
            }
          ],
          images: [
            {
              id: nanoid(5),
              title: 'pug on the floor',
              url: 'https://tinyurl.com/pkphjxxp',
              caption: 'Just getting some sunshine. ☀️🤩'
            },
            {
              id: nanoid(5),
              title: 'pugs in a line',
              url: 'https://tinyurl.com/79ub7mkt',
              caption: 'Hanging out with the homies!'
            },
            {
              id: nanoid(5),
              title: 'pug looking coy',
              url: 'https://tinyurl.com/fnv7mshe',
              caption: 'Sooo sleeepy...😴'
            }
          ]
        })
    }
    reject(new Error('Authentication failed'))
  })
}
