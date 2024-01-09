import React,{useCallback, useEffect, useRef, useState} from 'react'

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const myRef = useRef(null);

    useEffect(() => {
      myRef.current.focus();
    }, [])

    const Listitem = useCallback(() => {
        const Items = ['eat', 'drink', 'jump', 'read', 'relaxed'];

        return Items.map((item,index) => (
            <li key={index}>{ index+1}. {item}</li>
        ));

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted data: ', username, password);
    }
    return (
        <div className='flex justify-center items-center m-auto flex-col pt-24'>
            <h1 className='md:text-4xl text-2xl text-blue-800 md:font-bold font-semibold'>React Form using UseRef Hook</h1>

            <form action="" onSubmit={handleSubmit}
                className='w-[70%] md:w-[400px] py-4 border-2 rounded p-4 my-4 border-blue-800'>
                <input
                    type="text"
                    name='username'
                    placeholder='username'
                    ref={myRef}
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className='w-[100%] p-2 mb-2 border-2 rounded' />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    ref={myRef}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='w-[100%] p-2 mb-2 border-2 rounded' />
                <br />
                <button className='w-[100%] border-2 rounded p-2 mb-2 bg-blue-800 text-[#fff]' type='submit'>Submit</button>

            </form><br />
            <h3>UseCallback implementation</h3>
            <ul>{Listitem()}</ul>
        </div>
    )
}

export default Form
