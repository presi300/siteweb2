import { AiOutlineHome, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import NavBarElement from "@/components/navbarelement";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/content";
import NavBar from "@/components/navbar";
import Button from "@/components/Button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div id="main" className="scrollbar-hide flex h-auto w-screen flex-row flex-wrap ">
      <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-600">
        <div className="w-full ">
          <NavBar
            left={
              <div className="h-full">
                {/*Regular buttons*/}

                <motion.div
                  className="hidden h-full md:block"
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.3 }}
                >
                  <NavBarElement hashid="#">
                    <p className="">
                      <AiOutlineHome></AiOutlineHome>
                    </p>
                  </NavBarElement>
                  <NavBarElement hashid="#">About</NavBarElement>
                  <NavBarElement hashid="#">Contact</NavBarElement>
                  <NavBarElement hashid="#">Blog</NavBarElement>
                  <NavBarElement hashid="#">Help</NavBarElement>
                </motion.div>

                {/*Sidebar button*/}
                <motion.div className="h-full md:hidden">
                  <NavBarElement hashid="#sidebar">
                    <div className="px-1">
                      <RxHamburgerMenu></RxHamburgerMenu>
                    </div>
                  </NavBarElement>
                </motion.div>
              </div>
            }
            right={<img src="logo.jpg"></img>}
          />
        </div>

        {/*Sidebar*/}

        <Sidebar id="sidebar" title="Test">
          <div className="flex h-10 w-full flex-col gap-3">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>

            <Button variant="ghost">Contact</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Help</Button>
          </div>
        </Sidebar>

        {/*Title image*/}

        <div className="relative mb-32  mt-11 h-5 w-screen pb-96 ">
          <img
            className="absolute inset-0 h-full w-full object-cover sm:rounded-lg"
            src="https://www.wallpaperup.com/uploads/wallpapers/2016/09/30/1021577/10c4c55e292520363c03da855d2090de.jpg"
            alt=""
          />
          <div className="z-2 absolute inset-0 h-full w-full bg-black opacity-60 transition-all"></div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="z-3 absolute inset-0 flex h-full w-full items-center justify-center text-center text-5xl text-white"
          >
            Title Here
          </motion.div>
        </div>
        {/*2nd title*/}

        <div className="flex h-1/2  w-full flex-col items-center justify-center">
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className=" text-center text-3xl text-white"
          >
            A smaller, 2nd title goes here
          </motion.p>
          <p className="pt-3 text-center text-xl text-white">Subtitle</p>
        </div>
      </div>

      {/*Content*/}

      <div className="w-full bg-gradient-to-b from-gray-600 to-gray-500">
        <div className="flex w-full  justify-center transition-all">
          <div className="grid grid-cols-1 gap-10 transition-all  md:grid-cols-2 xl:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer sm:mx-0"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1678901783809-4eef2aab00fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1679081194389-fd2a0f6e1d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1523604149-35a61b8c8c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1663104658334-e6288a4b5cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1678735953346-fef224d2a15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1666529524897-76ad7cad5975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer sm:mx-0"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1678901783809-4eef2aab00fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1679081194389-fd2a0f6e1d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1523604149-35a61b8c8c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1663104658334-e6288a4b5cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1678735953346-fef224d2a15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="mx-2 flex min-w-0 transition-all hover:cursor-pointer"
            >
              <Content
                text="Text Here"
                image="https://images.unsplash.com/photo-1666529524897-76ad7cad5975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/*Footer*/}
      <div className="mt-10 flex h-40 w-full flex-col bg-gray-700 text-center text-white">
        <div className="mt-3 flex justify-center">
          <p className="text-lg text-white">Footer title</p>
        </div>
        <div className="my-2 ml-2 flex">
          <p>Footer text1, long text</p>
        </div>
        <div className="mt-10 flex items-center justify-center  ">
          <p className="">Social Media: </p>
          <p className="ml-2 text-xl ">
            <AiOutlineFacebook></AiOutlineFacebook>
          </p>
          <p className="ml-2 text-xl ">
            <AiOutlineTwitter></AiOutlineTwitter>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
