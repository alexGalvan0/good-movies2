import Image from "next/image"

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col justify-center  ">
      <Image src='https://freesvg.org/img/Movie-Clapperboard.png' alt='good movie icon' width={200} height={200}></Image>
      <div className="hero-content text-center">
        <div className="max-w-md">

          <h1 className="text-5xl font-bold">GOOD MOVIES</h1>
          <div>
            <p>Track films you’ve watched.</p>
            <p>Save those you want to see.</p>
            <p>Tell your friends what’s good.</p>
          </div>
          <div className="flex flex-col gap-2 items-center pt-2">
            <button className="btn btn-secondary">GET STARTED — ITS FREE!</button>
            <button className="btn btn-primary w-fit">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
