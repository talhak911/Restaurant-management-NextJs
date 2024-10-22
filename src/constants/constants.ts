import { FIELDS_TYPE, SignUpFieldsParams } from "@/types/types";
export const SIGN_UP_FIELDS = ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    dob,
    setDob
  }: SignUpFieldsParams): FIELDS_TYPE[] =>{ 
    const today = new Date().toISOString().split("T")[0];

    return[
    
      {
          label: 'Full name',
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: 'Enter your name',
          type: 'text',
        },
        {
            label: 'Email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Enter Email',
            type: 'email',
        },
        {
            label: 'Password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: 'Enter password',
            type: 'password',
          },
        {
      label: 'Mobile Number',
      value: phone,
      onChange: (e) => setPhone(e.target.value),
      placeholder: '03XXXXXXXXXX',
      type: 'tel',
    },
    {
      label: 'Date of Birth',
      value: dob,
      onChange: (e) => setDob(e.target.value),
      placeholder: '',
      type: 'date',
      additionalProps: { max: today }
    },
  ];}
  