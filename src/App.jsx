import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import Switcher from './Component/Switcher';
import { useTranslation } from 'react-i18next';
import TemporaryDrawer from './Component/Drawer';
import Full from './Component/Full';
import Cardd from './Component/Cardd';
import yak from './assets/Rectangle 4.svg'
import du from './assets/Rectangle 6.svg'
import se from './assets/Rectangle 8.svg'
import chor from './assets/Rectangle 12.svg'
import panj from './assets/Rectangle 13.svg'
import shash from './assets/Rectangle 14.svg'





function App() {

  const [lng, setLng] = useState('en')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(language);
  }

  return (
    <>

      <div className="wrapper dark:bg-[#191919] dark:text-white">
        <div className="main w-[85%] m-auto">

          <div className="navbar pt-[30px] flex items-center justify-between">
            <div className="">
              <img src="src/assets/logo 1.svg" alt="" />
            </div>
            <div className="md:hidden">
              <TemporaryDrawer />
            </div>
            <div className="md:flex gap-[50px] items-center md:block hidden">
              <ul className='flex gap-[67px] text-[#666] dark:text-[white]'>
                <li>Home</li>
                <li>About</li>
                <li>Tech Start</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
              <div className="flex gap-[20px]">
                <img src="src/assets/Vector (1).svg" alt="" />
                <img src="src/assets/ant-design_twitter-circle-filled.svg" alt="" />
                <img src="src/assets/entypo-social_linkedin-with-circle.svg" alt="" />
                <Switcher />
              </div>
            </div>
          </div>

          <div className="sec-1 md:mt-[200px] mt-[80px]">
            <div className="flex flex-wrap-reverse items-center md:gap-[0px] gap-[80px] justify-between">
              <div className="text-[#42446E] dark:text-[white] font-[700]">
                <h1 className='md:text-[58px] text-[48px]'>Hi 👋, <br />
                  My name is
                  <span className='text-indigo-500'>   Ali </span> <br />
                  I build things for web</h1>
              </div>
              <div className="">
                <img src="src/assets/50353683 1.svg" alt="" />
              </div>
            </div>
          </div>


          <div className="sec-2 mt-[150px]">
            <div className="obshi flex justify-between items-center  flex-wrap">
              <div className="left">
                <div className="">
                  <h1 className='text-[#42446E] dark:text-[white] text-[42px] font-[700]'>About Me</h1>
                  <p className='md:w-[500px] text-[#666] dark:text-[#A7A7A7] py-[20px] text-[18px]'>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                </div>
                <div className="mt-[55px]">
                  <h1 className='text-[#42446E] dark:text-[white] text-[42px] font-[700]'>Education</h1>
                  <div className="flex  items-center md:gap-[20px]">
                    <h1 className='text-[20px] text-[#666]'>Bachelor in Electronics & Communication</h1>
                    <Full title={'Full Time'} />
                  </div>
                  <div className="flex pt-[10px] gap-[50px]">
                    <div className="flex">
                      <img src="src/assets/mdi_office-building.svg" alt="" />
                      <p>Bangalore Instutute of Technology</p>
                    </div>
                    <p>Aug 2015 - Dec 2020</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <h1 className='text-[#42446E] mt-[100px] md:mt-[0px] dark:text-[white] text-[42px] pb-[20px] font-[700]'>Work Experience</h1>
                <div className="border-b-[2px] px-[3px] py-[3px]">
                  <div className="flex  items-center  justify-between">
                    <h1 className='text-[20px] text-[#666]'>Junior Web Developer</h1>
                    <Full title={'Full Time'} />
                  </div>
                  <div className="flex py-[5px] pt-[10px] gap-[200px]">
                    <div className="flex">
                      <img src="src/assets/mdi_office-building.svg" alt="" />
                      <p>Dr. Rajkumar’s Learning App</p>
                    </div>
                    <p>Sep 2021 - Dec 2021</p>
                  </div>
                </div>
                <div className="border-b-[2px] my-[43px] px-[3px] py-[3px]">
                  <div className="flex  items-center  justify-between">
                    <h1 className='text-[20px] text-[#666]'>Junior Web Developer</h1>
                    <Full title={'Full Time'} />
                  </div>
                  <div className="flex py-[5px] pt-[10px] gap-[200px]">
                    <div className="flex">
                      <img src="src/assets/mdi_office-building.svg" alt="" />
                      <p>Dr. Rajkumar’s Learning App</p>
                    </div>
                    <p>Sep 2021 - Dec 2021</p>
                  </div>
                </div>
                <div className="border-b-[2px] px-[3px] py-[3px]">
                  <div className="flex  items-center gap-[100px] justify-between">
                    <h1 className='text-[20px] text-[#666]'>Junior Web Developer</h1>
                    <Full title={'Full Time'} />
                  </div>
                  <div className="flex py-[5px] pt-[10px] gap-[200px]">
                    <div className="flex">
                      <img src="src/assets/mdi_office-building.svg" alt="" />
                      <p>Dr. Rajkumar’s Learning App</p>
                    </div>
                    <p>Sep 2021 - Dec 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="sec-3 mt-[190px]">

            <div className="text-center">
              <h1 className='text-[48px] font-[700] text-[#42446E]'>My Tech Stack</h1>
              <p className='text-[28px] text-[#A7A7A7]'> Technologies I’ve been working with recently</p>
            </div>

            <div className="mt-[130px]">
              <div className="flex flex-wrap  justify-center gap-[35px] md:justify-between">
                <img src="src/assets/vscode-icons_file-type-html.svg" alt="" />
                <img src="src/assets/vscode-icons_file-type-css.svg" alt="" />
                <img src="src/assets/vscode-icons_file-type-js-official.svg" alt="" />
                <img src="src/assets/logos_react.svg" alt="" />
                <img src="src/assets/Vector (2).svg" alt="" />
                <img src="src/assets/logos_bootstrap.svg" alt="" />
              </div>
              <div className="flex flex-wrap my-[100px] justify-center gap-[35px] md:justify-between md:justify-between">
                <img src="src/assets/vscode-icons_file-type-tailwind.svg" alt="" />
                <img src="src/assets/logos_sass.svg" alt="" />
                <img src="src/assets/logos_git-icon.svg" alt="" />
                <img src="src/assets/cib_greensock.svg" alt="" />
                <img src="src/assets/vscode-icons_file-type-vscode.svg" alt="" />
                <img src="src/assets/akar-icons_github-fill.svg" alt="" />
              </div>
            </div>


          </div>



          <div className="sec-4 mt-[190px]">


            <div className="text-center">
              <h1 className='text-[48px] font-[700] text-[#42446E]'>Projects</h1>
              <h1 className='text-[28px] text-[#A7A7A7]'>Things I’ve built so far  </h1>
            </div>


            <div className="mt-[100px] ">
              <div className="flex flex-wrap gap-[40px] justify-around">
                <Cardd img={yak} title={'Project Tile goes here'} desc={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} p={'Tech stack : HTML , JavaScript, SASS, React'} />
                <Cardd img={du} title={'Project Tile goes here'} desc={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} p={'Tech stack : HTML , JavaScript, SASS, React'} />
                <Cardd img={se} title={'Project Tile goes here'} desc={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} p={'Tech stack : HTML , JavaScript, SASS, React'} />
              </div>
              <div className="flex flex-wrap gap-[40px] mt-[70px] justify-around">
                <Cardd img={chor} title={'Project Tile goes here'} desc={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} p={'Tech stack : HTML , JavaScript, SASS, React'} />
                <Cardd img={panj} title={'Project Tile goes here'} desc={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} p={'Tech stack : HTML , JavaScript, SASS, React'} />
                <Cardd img={shash} title={'Project Tile goes here'} desc={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} p={'Tech stack : HTML , JavaScript, SASS, React'} />

              </div>
            </div>


          </div>



          <div className="sec-5 mt-[150px] mb-[30px]  flex justify-between">
            <div className="">
              <img className='text-[white]' src="src/assets/logo 1 (1).svg" alt="" />
            </div>
            <div className="flex flex-wrap gap-[30px] items-center">
              <h1>+91 12345 09876</h1>
              <h1>info@example.com</h1>
              <div className="flex flex-wrap gap-[50px]">
                <img src="src/assets/Vector (1).svg" alt="" />
                <img src="src/assets/ant-design_twitter-circle-filled.svg" alt="" />
                <img src="src/assets/entypo-social_linkedin-with-circle.svg" alt="" />
              </div>

            </div>
          </div>

          
          <hr />


          <div className="flex mt-[30px] flex-wrap justify-between ">
          <ul className='flex flex-wrap gap-[67px] text-[#666] dark:text-[white]'>
                <li>Home</li>
                <li>About</li>
                <li>Tech Start</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
              <div className="">
                <p>Designed and built by Pavan MG with Love & Coffee</p>
              </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default App












{/* <select
className="bg-[white] border-none text-[black] h-[30px] w-[55px] font-[600] rounded-[2px]"
value={lng}
onChange={(e) => {
  changeLanguage(e.target.value);
  setLng(e.target.value);
}}
>
<option value={"en"}>En</option>
<option value={"ru"}>Ru</option>
</select> */}
