import { useForm } from "react-hook-form"
import useAuth from "../../hook/useAuth"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    
    const {createUser,user} = useAuth();
    const navigate = useNavigate();
    console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = ({email,password}) => {
        console.log(email,password)
        createUser(email,password)
        .then(() => {
            axios.post('http://localhost:5000/users',{email})
            .then(()=>{
                alert('Account created successfully')
                navigate('/')
            })
            .catch(err=>console.log(err))
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="flex h-screen  justify-center items-center flex-col gap-36 lg:flex-row font-mono">
            <div className="card border-y-2 border-accent pt-5 shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered" required />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <label className="label">
                        <p className="label-text-alt ">{`Already have an account?`} <Link to='/' className="link link-hover">Log in!</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent"><input type="submit" value='Sign up'/></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;