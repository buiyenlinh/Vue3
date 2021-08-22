import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import axios from 'axios';
import { ref } from 'vue';
import router from '@/router';

export default function useLogin () {
    const loginSchema = yup.object ({
      username: yup.string().required("Tên đăng nhập là bắt buộc"),
      password: yup.string().required("Mật khẩu là bắt buộc")
    })
    
    const { handleSubmit, errors, resetForm } = useForm({validationSchema: loginSchema});
    const isLoading = ref(false);
   
    const onSubmit = handleSubmit(values => {
      isLoading.value = true;
      login(values);
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

async function login(params: any) {
  axios.post("https://api-nienluan.sharenows.com/api/v1/auth/login", params)
    .then (function(response) {
      console.log(response);
      localStorage.setItem('token', response.data.data.token);
      router.push({name: 'Admin'});
    })
}
