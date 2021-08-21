import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import axios from 'axios';
import { ref } from 'vue';

export default function useValidateAccount () {
  // const usernameRegExp = /^0[0-9]{9,}$/;
    const loginSchema = yup.object ({
      username: yup.string().required("Tên đăng nhập là bắt buộc"),
      password: yup.string().required("Mật khẩu là bắt buộc").min(8)
    })
    
    const { handleSubmit, errors, resetForm } = useForm({validationSchema: loginSchema});
    const isLoading = ref(false);
    const onSubmit = handleSubmit(values => {
      isLoading.value = true;
      // alert(JSON.stringify(values, null, 2));
      login(JSON.stringify(values, null, 2));
    });


    const { value: username } = useField('username');
    const { value: password } = useField('password');
  return {
    username,
    password,
    onSubmit,
    errors,
    resetForm,
    isLoading
  }
};

async function login(params:any) {
  // const response = await axios.post('https://api-nienluan.sharenows.com/api/v1/Production/login', params);
  const response = await axios.post('http://localhost:8082/api/login', params);
  console.log(response)
  localStorage.setItem('token', "khkjhguihdfrutihfjdbskjifgjfjfhgjh");
}
