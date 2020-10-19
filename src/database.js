import {useState, useEffect} from 'react';
import firebase from './firebase';

/////////////////////////////////////////////////////////////////////////
export const useDatabase = (endpoint) => {
    const [data, setData] = useState({})
    //-------------------------------------------
    useEffect(() => {
      const ref = firebase.database().ref(endpoint)
        ref.on('value', snapshot => {          
          setData(snapshot.val())
        })
      return () => {
        ref.off()
      }
    }, [endpoint])
    //---------------------------------------------
    return data
  }

/////////////////////////////////////////////////////////////////////////
  export const useDatabaseActions = (endpoint) => {
    const [status, setStatus] = useState('')
  
    const save = (data) => {
      const ref = firebase.database().ref(endpoint)
      ref.push({data}, err => {
        if(err){
          setStatus('ERROR')
        }else{
          setStatus('SUCCESS')
        }
      })
    }

    const exclude = (key) => {
      const ref = firebase.database().ref(endpoint)
      console.log(ref)
      ref.child(key).remove()
    }
  
    return [status, save, exclude]
  }

 

