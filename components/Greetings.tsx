import React from 'react'
//import Typed from 'typed.js'
//import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <p>
          Welcome! I’m <b>Zhou Zihang</b>. 
        </p>

        <p>
          "SOTO" is the abbreviation I use on social media. I currently live in China{` `}
           and have just graduated from Beihang University with a
          bachelor's degree in Computer Science and Technology. I'm planning to study abroad in
          Canada and am currently waiting for my visa.
        </p>

        <p>
          I've been operating a Minecraft server since 2014, which is probably where my interest in
          programming began. If you're interested, feel free to join by entering{' '}
          <a href="https://www.mcac.cc/">mcac.cc</a> in client.
        </p>

        <p>
          I have an adorable Shiba Inu named doudou. You can see him on his{' '}
          <a href="https://www.instagram.com/puppydoudou/">instagram</a>.
        </p>

          <p>
            This website is used to introduce myself, publish some regular blogs, document my travel
            diaries, as well as record books, movies, and music I've experienced. Feel free to{' '}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
      </div>
  )
}

export default Greetings
