import { useForm } from "react-hook-form"
import './App.css'

function App() {

  // Without react hook form:
  // `new` is used to create an object from a class.
  // `FormData` is a built-in browser class used to collect form inputs.
  // `new FormData(e.target)` creates a FormData object from the submitted form.
  // It automatically stores input values as key–value pairs (name → value).
  // We can access values using `formData.get()` or loop using `formData.entries()`.

  // When form is submitted perform following operations.
  const handleSubmit1 = (e) =>{ // e is the event object that React automatically gives to the function when something happens (like submit, click, change).
    e.preventDefault(); //1. Avoid refresh of page
    console.log(e.target);
    console.log(e.type);

    // read form data
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Username:",username);
    console.log("Password:",password);
  }


    //-----------------------------------------------------------------------------------------------------------------
    // With React form hook:
    //-----------------------------------------------------------------------------------------------------------------

    // use this document for reference: https://react-hook-form.com/get-started
    const {
      register,
      handleSubmit,
      setError,
      formState:{errors},
    } = useForm()


    const delay=(d)=>{
    // Promise is a JavaScript object used for async operations.
    // It has two functions:
      // resolve() → mark the promise as successful.
      // reject() → mark the promise as failed.
      return new Promise((resolve,reject)=>{ 
      setTimeout(()=>{
        resolve();
      },d*1000)
    })
}
      const onSubmitform2 = async(data) =>{
      await delay(2);
      console.log(data);
      if(data.username == "Marcus")
      {
        setError("myform",{message:"Your ideas are wonderfull"});
      }
      if (data.username !== "Marcus")
      {
        setError("isAllowed",{message:"You need to read Marcus Books."});
      }
    }
  return (  
    <>

    {/* //-----------------------------------------------------------------------------------------------------------------
    // Without React form hook:
    //----------------------------------------------------------------------------------------------------------------- */}
      <h2 className='text-2xl font-bold'>Form Handling</h2>
      <h3 className='text-xl font-semibold mt-3'>Using FormData Method (Without React hook)</h3>
      <p>FormData method is used in JavaScript to collect and send form data (like input values, files, etc.) to a server without reloading the page.</p>
      <div className='flex w-full justify-center mt-[23px] items-center'>
        <form onSubmit={handleSubmit1}>
          <label >Username: </label>
          <input className='bg-slate-600 rounded-2xl' type="text" name='username' /><br /><br />
          <label>Password: </label>
          <input className='bg-slate-600 rounded-2xl' type="password" name="password" /><br />
          <button className='submit cursor-pointer bg-slate-500 p-1.5 mt-5'>SUBMIT</button>
      </form>
      </div>

      <hr className='mt-5 mb-5' />



    {/* //-----------------------------------------------------------------------------------------------------------------
    // With React form hook:
    //----------------------------------------------------------------------------------------------------------------- */}
      <h3 className='text-xl font-semibold mt-3'>Using React Hook Form</h3>
      <p>React Hook Form is a library that helps you build forms easily in React with less code and better performance.</p>
      <p>React Hook Form manages form state, handles validation, collects form data automatically and manages error messages efficiently.</p>
      <div className='flex w-full justify-center mt-[23px] items-center'>

        {/* handleSubmit is given by useForm(), not your own. */}
        <form onSubmit={handleSubmit(onSubmitform2)}>
          {/* When the form is submitted, it first prevents the page from reloading, then runs all validations you defined for your inputs using ...register .*/}
          <label >Username: </label>
          <input className='bg-slate-600 rounded-2xl' type="text" name='username' {...register("username",{required:{value:true,message:"This field is required."},minLength:{value:3,message:"Min length is 3"},maxLength:{value:8,message:"Max length is 8."}})}/><br /><br />
          {errors.username && <div className="text-red-600">{errors.username.message}</div>}

          <label>Password: </label>
          <input className='bg-slate-600 rounded-2xl' type="password" name="password" {...register("password",{minLength:{value:7,message:"Min length of pass is 7."}})} /><br />
          {errors.password && <div className="text-red-600">{errors.password.message}</div>}
          <button className='submit cursor-pointer bg-slate-500 p-1.5 mt-5'>SUBMIT</button>


           {/* Custom Error throwing */}
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.isAllowed && <div>{errors.isAllowed.message}</div>}
      </form>
      </div>
    </>
  )
}

export default App
