'use client'
import Image from "next/image"
import Link from 'next/link'

import { useState,ChangeEvent } from'react'

export default function Home() {

// gettting user loggin inormation into state.
const [username, setUsername] = useState<string>('')
const [password, setPassword] = useState<string>('')

const getUserName = (e:ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value)
}



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-x-52  bg-base-300 rounded-2xl">
        <div className="flex flex-col items-center">
          <Image src='https://freesvg.org/img/Movie-Clapperboard.png' alt='good movie icon' width={300} height={300}></Image>
          <h1 className="text-5xl font-bold  text-center">GOOD MOVIES</h1>
          <ul>
            <li>Track films you’ve watched.</li>
            <li>Save those you want to see.</li>
            <li>Tell your friends what’s good.</li>
          </ul>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="username" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6 gap-2 ">
              <button className="btn btn-primary">LOGIN</button>
              <Link className="btn btn-secondary" href='/signup'>GET STARTED  - IT'S FREE!</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
