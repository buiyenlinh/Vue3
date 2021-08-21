import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import axios from 'axios';

export default function useValidateAccount () {
  const phoneRegExp = /^0[0-9]{9,}$/;
    const loginSchema = yup.object ({
      phone: yup.string().required("Số điện thoại là bắt buộc").matches(phoneRegExp, 'Phone number is not valid').max(10),
      password: yup.string().required("Mật khẩu là bắt buộc").min(8)
    })
    
    const { handleSubmit, errors, resetForm } = useForm({validationSchema: loginSchema});

    const onSubmit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2));
      login(JSON.stringify(values, null, 2));
    });


    const { value: phone } = useField('phone');
    const { value: password } = useField('password');
  return {
    phone,
    password,
    onSubmit,
    errors,
    resetForm
  }
};

async function login(params:any) {
  // const response = await axios.post('https://api-nienluan.sharenows.com/api/v1/Production/login', params);
  const response = await axios.post('http://localhost:8082/api/login', params);
  console.log(response)
}
