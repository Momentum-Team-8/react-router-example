import '@fortawesome/fontawesome-free/css/all.css'

const Register = () => {
  return (
    <>
      <div className='logo'>
        <p className='has-text-primary has-text-centered'>Pug.ly<i class='fas fa-paw' /></p>
      </div>
      <form className='form'>
        <label className='label'>Email</label>
        <input className='input' type='text' placeholder='email@domain.com' />
        <label className='label'>Username</label>
        <input className='input' type='text' placeholder='janedoe123' />
        <label className='label'>Password</label>
        <input className='input' type='password' />
        <div id='form-buttons'>
          <button className='button is-primary' type='submit'>Sign Up</button>
        </div>
      </form>
    </>
  )
}

export default Register
