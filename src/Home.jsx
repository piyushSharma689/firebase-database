import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { collection, addDoc, getDocs, doc,getDoc , query, where} from 'firebase/firestore'
import { db } from './firebase'
import Card from './Card'


function Home() {
    const [details, setdetails] = useState({})
    const [search, setsearch]= useState('');

    const [data, setdata]= useState({});

    const handlesubmit = async()=>{
         try{
            const docRef= await addDoc(collection(db, "userData"),{
                Name: details.name,
               Age: details.age,
               roll: details.roll,
               Phone: details.mob
            })
         }catch(e){
            console.log(e)
         }
         setdetails({...details, name:'', age:'', mob:'',roll:''})
    }

    const handleGet= async()=>{
        try{
            const docRef = collection(db,"userData")
            const q= query(docRef, where("roll","==",`${search}`))
            const snap =  await getDocs(q);
            snap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setdata(doc.data())
              });

        }catch(e){
            console.log(e);
        }
        
    }



  return (
    <>
    <h1>fire Store</h1>
     <input type="text" placeholder='Name' value={details.name} onChange={(e)=>setdetails({...details, name:e.target.value})} style={{padding:'10px'}} /> <br /><br />
     <input type="number" placeholder='Age' value={details.age} onChange={(e)=>setdetails({...details, age:e.target.value})} style={{padding:'10px'}}/> <br /><br />
     <input type="number" placeholder='Roll No.' value={details.roll} onChange={(e)=>setdetails({...details, roll:e.target.value})} style={{padding:'10px'}}/> <br /><br />
     <input type="number" placeholder='Mob No.' value={details.mob} onChange={(e)=>setdetails({...details, mob:e.target.value})} style={{padding:'10px'}}/> 
     <br />
     <br />
     <button onClick={handlesubmit} >Send to DB</button><br /><br />
     <input type="number" placeholder='Search with Roll no.' value={search} onChange={(e)=>setsearch(e.target.value)} style={{padding:'10px'}}/> <br /><br />

     <button onClick={handleGet} >get from DB</button><br /><br />
     <Card name={data.Name} age={data.Age} mob={data.Phone} />
       
    </>
  )
}

export default Home