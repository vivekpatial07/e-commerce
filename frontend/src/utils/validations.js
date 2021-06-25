import { errorMessage } from '../config/message.json'

export const requiredValidate = (name) => {
  let error = ''
  let nameArray = ''

  if (name) {
    nameArray = name.trim()
  } else {
    nameArray = ''
  }

  if (nameArray.length < 1) {
    error = errorMessage.required
  }

  return error
}

export const emailValid = (email) => {
    
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  let error = ''

  let emailValid = ''

  if (email) {
    emailValid = email
  } else {
    emailValid = ''
  }

  if (emailValid.length < 1) {
    error = errorMessage.required
  } else if (!regex.test(String(email).toLowerCase())) {
    error = errorMessage.invalid
    console.log(error)
  }

  return error
}

export const createPasswordValidate = (password) => {
  let message = ''

  if (password.length < 7) {
    message = errorMessage.password
  }

  return message
}

export const numericValidate = (num) => {
  let message = ''
  var reg = /^-?\d+\.?\d*$/
  
  if(num.length < 1){
    message = errorMessage.required
  } else if(num.length !== 6 && reg.test(String(num).toLowerCase())) {
    message = errorMessage.zip_code_invalid
  }
  
  return message
}