import React from 'react'

const Form = () => {
  return (
    <div>
        <div class="center">
  <h1>Patient Form</h1>
  <form>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>Email</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>Password</span>
    </div>
    <div class="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
  )
}

export default Form
