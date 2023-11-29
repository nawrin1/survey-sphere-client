

import { TextField } from "@mui/material";
import Select from "react-select"
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar
} from "recharts";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserRole from "../../hooks/useUserRole";
import moment from "moment/moment";
import useVote from "../../hooks/useVote";
import useComment from "../../hooks/useComment";

import { Popover } from '@headlessui/react'


const SurveyDetails = () => {
    const [userRole,setUserRole]=useState(true)
    const[enableVote,setEnableVote]=useState(false)
    const navigate=useNavigate()

    const [data,setData]=useState([])
    const [proUser]=useUserRole()

    const {user}=useContext(AuthContext)
    console.log(proUser,"is pro user?")
    const [vote,voteLoading,isFetched]=useVote()
    
  
    // const[vote,voteLoading,,isFetched]=useVote()
    console.log(vote)

   
   
    const {
      title,
      category,
      description,
      ques1,
      ques2,
      ques3,
      surveyor,
     
      
      deadline,
      _id
      
     
    }= useLoaderData();
    console.log(deadline,">>>>>>")
    useEffect(()=>{
        if(deadline<moment().format('YYYY-MM-DD')){
        console.log("expired")
        setEnableVote(true)

        }
        else{
          console.log('not expired')
        }
        if (proUser){
            setUserRole(false)

        }
        if (user){
          console.log(vote,"voeeeeeee")
      
          const votedSurvey=vote.filter(votes=>votes.votedby==user.email)
          console.log(votedSurvey,"my voted")
          const voted=votedSurvey.find(vote=>vote.title==title)
          if(voted){
            console.log('probb')
              setEnableVote(true)
          }
          console.log(enableVote,"enable")

        }
        
     
        
       

    },[proUser,vote,enableVote,user?.email])
    console.log(userRole,"userrrrrr")


  
   
      const { register, handleSubmit, reset, formState: { errors },control, setError } = useForm();
      const axiosSecure=useAxiosSecure()
      
      const votedTime = moment().format('YYYY-MM-DD');
      const[comment,refetch]=useComment({title})
      console.log(comment,"comcom")

      const onSubmit=async(data)=>{
        if(!user){
          navigate('/')

        }
          console.log(data)
       
          const survey = { title: data.title, category: data.category,description:data.description,ques1:data.ques1,ques2:data.ques2,ques3:data.ques3,deadline:data.deadline,ans1:data.ans1.value,ans2:data.ans2.value,ans3:data.ans3.value,likeordislike:data.likeordislike.value,comments:data.comments,reports:data.reports,votedby:user.email,surveyor:surveyor,votedTime:votedTime,surveyId:_id};
          console.log(survey)
          if(data.comments){
            const survey1 = { title: data.title, category: data.category,description:data.description,ques1:data.ques1,ques2:data.ques2,ques3:data.ques3,deadline:data.deadline,ans1:data.ans1.value,ans2:data.ans2.value,ans3:data.ans3.value,likeordislike:data.likeordislike.value,comments:data.comments,votedby:user.email,surveyor:surveyor,votedTime:votedTime};

            const com = await axiosSecure.post('/comment', survey1)
            
            if(com.data.insertedId){
                console.log('comment added to comment collection')
                refetch()
                
               
            }

          }
          if(data.reports){
            const survey2 = { title: data.title, category: data.category,description:data.description,ques1:data.ques1,ques2:data.ques2,ques3:data.ques3,deadline:data.deadline,ans1:data.ans1.value,ans2:data.ans2.value,ans3:data.ans3.value,likeordislike:data.likeordislike.value,reports:data.reports,votedby:user.email,surveyor:surveyor,votedTime:votedTime};

            const repo= await axiosSecure.post('/report', survey2)
            
            if(repo.data.insertedId){
                console.log('report added to report collection')
                
               
            }

          }

          const sData = await axiosSecure.post('/vote', survey)
          console.log(sData.data)
          if(sData.data.insertedId){
              
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `Yoy have voted successfully`,
                  showConfirmButton: false,
                  timer: 1500
                });
                setEnableVote(true)
                refetch()


          }

      }
      const handleChart=(title)=>{
        axiosSecure.get(`/getSurveyChartData/${title}`)
          .then(response => {
            const { yes, no } = response.data;
            console.log(yes, no);
            const data = [{name: 'YES', uv: yes},{name: 'NO', uv: no} ];
            setData(data)
          })
          .catch(error => {
            console.error('Error fetching survey data:', error);
          });
          document.getElementById(`my_modal_${title}`).showModal()
  
      }

    console.log(enableVote,"whatt")
    return (
        <div>
        <div className=" min-h-screen max-w-6xl mx-auto mb-10 mt-5 ">
           <div className="">
           <h2 className="font-Sora font-semibold text-4xl text-center mt-4">SURVEY DETAILS</h2>
              
                   
               <div className=" shadow-2xl">
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control ">
                        <div>
                        <TextField  InputProps={{
        readOnly: true,
        style: { color: 'black' }, // Adjust the color to make it more visible
      }}style={{fontFamily:'Sora'}} defaultValue={title}id="outlined-search1" label="Survey Title" type="text"  {...register("title", { required: true })} name="title" placeholder="Survey Title.."/>
                        </div>
                           
                          
                           
                        
                         
                          
                       </div>
                       <div className="form-control">
                          
                           <TextField  InputProps={{
        readOnly: true,
        style: { color: 'black' }, // Adjust the color to make it more visible
      }}style={{fontFamily:'Sora'}} defaultValue={description} id="outlined-search2" label="Survey Description" type="text"  {...register("description", { required: true })} placeholder="Your survey description.." />
                           
                       
                           
                       </div>
                       <div className="form-control">
                         
                           <TextField  InputProps={{
        readOnly: true,
        style: { color: 'black' }, // Adjust the color to make it more visible
      }}style={{fontFamily:'Sora'}} defaultValue={category} id="outlined-search3" label="Category " type="text"  {...register("category", { required: true })} name="category" placeholder="Set category of survey.."  />
                          
                          
                           
                       </div>
                       <div className="form-control">
                           <label className="label ">
                               <span className="label-text mt-8 mb-4 font-Sora font-semibold text-2xl">Questions:</span>
                           </label>
                  
                     <div className="w-full flex-auto md:flex-auto lg:flex-auto" >
                     <TextField
  InputProps={{
    readOnly: true,
    style: { color: 'black' },
  }}
  style={{ fontFamily: 'Sora', marginBottom: 6, width: '100%' }}
  defaultValue={ques1}
  id="outlined-search4"
  label="Question 1"
  type="text"
  {...register('ques1', {
    required: true,
  })}
  placeholder="Set your first question..."
/>

                           </div>
                           <div>
                          
     <Controller
          name="ans1"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select
                {...field}
                options={[
                  { value: 'YES', label: 'YES' },
                  { value: 'NO', label: 'NO' },
                ]}
                onChange={(selectedOption) => {
                  // Clear previous errors
                  setError('ans1', {
                    type: 'validate',
                    message: '', // Clear any existing error message
                  });

                  // Check if an option is selected, if not, set an error
                  if (!selectedOption) {
                    // Set an error message
                    setError('ans1', {
                      type: 'validate',
                      message: 'Please select an option',
                    });
                  }
                  field.onChange(selectedOption);
                }}
              />
              {fieldState.error && (
                <p style={{ color: 'red', marginTop: '8px', marginBottom: 0 }}>
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
          rules={{ validate: (value) => !!value }}
        />

                            
                           
                            </div>
                          <div className="w-full flex-auto md:flex-auto lg:flex-auto">
                            <TextField  InputProps={{
        readOnly: true,
        style: { color: 'black' }, // Adjust the color to make it more visible
      }}style={{fontFamily:'Sora',marginBottom:6,marginTop:20,width: '100%'}} defaultValue={ques2}  id="outlined-search5" label="Question 2" type="text"  {...register("ques2", {
                               required: true,
                              
                               
                           })} placeholder="Set your second question..."  />
                            </div>
                            <div>
                           
      <Controller
          name="ans2"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select
                {...field}
                options={[
                  { value: 'YES', label: 'YES' },
                  { value: 'NO', label: 'NO' },
                ]}
                onChange={(selectedOption) => {
                  setError('ans2', {
                    type: 'validate',
                    message: '', 
                  });

                  if (!selectedOption) {
                    setError('ans2', {
                      type: 'validate',
                      message: 'Please select an option',
                    });
                  }
                  field.onChange(selectedOption);
                }}
              />
              {fieldState.error && (
                <p style={{ color: 'red', marginTop: '8px', marginBottom: 0 }}>
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
          rules={{ validate: (value) => !!value }}
        />
                            
                            </div>
                           
                          <div className="w-full flex-auto md:flex-auto lg:flex-auto">
                          <TextField  InputProps={{
        readOnly: true,
        style: { color: 'black' }, 
      }}style={{fontFamily:'Sora',width: '100%',marginTop:20}} id="outlined-search6" defaultValue={ques3}  label="Question 3" type="text"  {...register("ques3", {
                               required: true,
                              
                               
                           })} placeholder="Set your third question..."  />
                          </div>
                          <div>
                         
                        <Controller
          name="ans3"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select
                {...field}
                options={[
                  { value: 'YES', label: 'YES' },
                  { value: 'NO', label: 'NO' },
                ]}
                onChange={(selectedOption) => {
                  setError('ans3', {
                    type: 'validate',
                    message: '', 
                  });

                  if (!selectedOption) {
                    setError('ans3', {
                      type: 'validate',
                      message: 'Please select an option',
                    });
                  }
                  field.onChange(selectedOption);
                }}
              />
              {fieldState.error && (
                <p style={{ color: 'red', marginTop: '8px', marginBottom: 0 }}>
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
          rules={{ validate: (value) => !!value }}
        />
                        

                                <div>
                                    <h2 className="text-3xl font-Sora font-bold text-blue-700 mt-8">COMMENTS</h2>
                                <TextField
                                
                                style={{ fontFamily: 'Sora', width: '100%', marginTop: 20 }}
                                id="outlined-search7"
                                
                                label="Comments"
                                type="text"
                                {...register('comments', {
                                    
                                })}
                                placeholder="Giver your comments"
                                disabled={userRole} 
                                />
                                    
                                </div>
                            
                            </div>
                           <label className="label ">
                               <span className="label-text mt-8 mb-4 font-Sora font-semibold text-2xl">Deadline:</span>
                           </label>
                           <TextField  InputProps={{
        readOnly: true,
        style: { color: 'black' }, 
      }}style={{fontFamily:'Sora'}} defaultValue={deadline} id="outlined-search8" label="Survey Deadline"  type="date"  {...register("deadline", {
                               required: true,
                              
                               
                           })} placeholder="Set deadline of survey..."  />

                           <div>
                            <h2 className="text-3xl font-Sora font-bold text-blue-700 mt-8">LIKE OR DISLIKE?</h2>
                          
      <Controller
          name="likeordislike"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Select
                {...field}
                options={[
                  { value: 'LIKE', label: 'LIKE' },
                  { value: 'DISLIKE', label: 'DISLIKE' },
                ]}
                onChange={(selectedOption) => {
                  setError('likeordislike', {
                    type: 'validate',
                    message: '', 
                  });

                  if (!selectedOption) {
                    setError('likeordislike', {
                      type: 'validate',
                      message: 'Please select an option',
                    });
                  }
                  field.onChange(selectedOption);
                }}
              />
              {fieldState.error && (
                <p style={{ color: 'red', marginTop: '8px', marginBottom: 0 }}>
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
          rules={{ validate: (value) => !!value }}
        />
                           </div>
                           <div>
                                    <h2 className="text-3xl font-Sora font-bold text-red-700 mt-12">Want to Report?</h2>
                                <TextField
                                
                                style={{ fontFamily: 'Sora', width: '100%', marginTop: 20 }}
                                id="outlined-search7"
                                
                                label="Reports"
                                type="text"
                                {...register('reports', {
                                    
                                })}
                                placeholder="Want to Report?"
                                
                                />
                                    
                                </div>
    
                       </div>
                       {user ? (
  <>
    <div className="form-control mt-2">
      <input className="btn btn-primary font-Sora font-semibold" disabled={enableVote} type="submit" value="VOTE" />
    </div>
  </>
) : (<>
  <p className="text-red-600 text-center text-2xl my-4 font-Sora font-medium">Please log in to vote.</p>
  <Link to='/login'><button className="btn btn-accent w-[50%] flex place-items-center mx-auto justify-center">Go to Login</button></Link></>
)}
                       
                       
                   </form>
                  
                   
               </div>
               <div className="flex justify-between">
               <div>
                <h2 className="font-Sora text-2xl text-blue-700 mt-8 my-6">All Comments</h2>
                <Popover className="relative">
                  {
                    user?<><Popover.Button className="justify-center bg-slate-800 text-white btn btn-outline">
                    Click to see comments
                    </Popover.Button></>:<><Popover.Button disabled={true} className="justify-center bg-slate-800 text-white btn btn-outline">
            Click to see comments
            </Popover.Button></>
                  }
                

            <Popover.Panel className="">
            <div className="grid grid-cols-1 bg-white border rounded p-4">
                {comment.length === 0 ? (
                <p>No comments yet</p>
                ) : (
                comment.map((comments, index) => (
                    <p key={index} className="border-b-2 mb-2 border-slate-900 p-2 rounded-2xl bg-slate-200 text-lg font-medium font-Sora ">
                    {comments.comments}
                    </p>
                ))
                )}
            </div>
            </Popover.Panel>
</Popover>
  
               </div>
               <div>
               <h2 className="text-2xl font-Sora font-semibold text-gray-700 mt-8 mb-6">Show Chart</h2>
               {
                user?<button disabled={!enableVote}onClick={()=>handleChart(title)}className=" btn w-full btn-accent p-4 rounded-2xl">Chart</button>:<button disabled={true}onClick={()=>handleChart(title)}className="btn btn-secondary">Chart</button>
               }
               {/* <button disabled={!enableVote}onClick={()=>handleChart(title)}className="btn btn-secondary">Chart</button> */}
               <dialog id={`my_modal_${title}`} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Chart</h3>
    <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
</div>
           </div>
       </div>
       
   </div>
    );
                
};

export default SurveyDetails;