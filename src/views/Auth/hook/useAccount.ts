import { reactive, ref } from "vue"


export default function useAccount () {
  const account = reactive({
    phone: '',
    password: ''
  })

  const resetForm = () => {
    account.phone = "";
    account.password = "";
  }

  const submitForm = (formName: any) => {
    alert(account.phone + ', ' + account.password + ', ' + formName);
    
  }

  return {
    account,
    resetForm,
    submitForm
  }
};
