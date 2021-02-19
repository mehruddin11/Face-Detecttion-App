import React from 'react';
const Signin = ({ Onroutechnage}) =>{
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center mw6 ">
    <main className="pa4 black- center ">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend  className="f2 fw6 ph0 mh0">Register</legend>
       <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" require = 'email' name="email-address"  id="email-address"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" require = 'email' name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" recquire = 'password' name="password"  id="password"/>
      </div>
       
    </fieldset>
    <div className="">
       
      <p onClick = { () => Onroutechnage('home') } className="f6 link dim black db pointer">Register</p>
    </div>
    
  </form>
</main>
</article>

    )
}
export default Signin
