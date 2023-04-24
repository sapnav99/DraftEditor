import React, {useState, useEffect} from 'react';
import './MyEditor.css';


export default function Heading() {
    const [data, setData] = useState('');
    const handleData=()=>{
      setData(data);
    }

useEffect(() => {
  localStorage.setItem('data', JSON.stringify(data));
}, [data]);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h4 className='col-10 text-center'>Demo editor by Sapna</h4>

        <button className='col-2' type='submit' onClick={handleData}>save</button>
      </div>
    </div>
  )
}
