import React, { useState } from "react";
import Add from "/src/img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err,setErr] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    setLoading(true); 
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    try 
    {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

    //   const uploadTask = uploadBytesResumable(storageRef, file);

    //   uploadTask.on(
    //     (error) => 
    //     {
    //       setErr(true);
    //     },
    //     () => 
    //     {
    //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => 
    //       {
    //         await updateProfile(res.user,
    //           {
    //           displayName,
    //           photoURL: downloadURL,
    //         })
    //         console.log('File available at', downloadURL);
    //         await setDoc(doc(db, "users", res.user.uid), 
    //         {
    //           uid: res.user.uid,
    //           displayName,
    //           email,
    //           photoURL: downloadURL
    //         });

    //         await setDoc(doc(db, "usersChats", res.user.id, {}));
    //         navigate("/");
    //       });
    //     }
    //   )
    // }
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
            }, console.log('done'));
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    }catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Water logs</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
         
          <button disabled={loading}>Sign up</button>
          {loading && "Adding user, please wait..."}
          {err }{/* && <span>Something went wrong</span> */}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;