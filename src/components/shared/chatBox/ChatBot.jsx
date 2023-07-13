import React, { useEffect, useRef, useState } from "react";
import { logo, user } from "../../../Assets/getImages";
import Message from "./Message";

function ChatBot() {
  const [isOpentChat, setIsOpenChat] = useState(false);
  const formRef = useRef();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      message: "hi",
      timestamp: 1689208910,
      imageUrl: user,
    },
    {
      id: 2,
      sender: "bot",
      message: "hello",
      timestamp: 1689207509,
    },
    {
      id: 3,
      sender: "user",
      message: "How are you?",
      timestamp: 1689207509,
      imageUrl: user,
    },
    {
      id: 4,
      sender: "bot",
      message: "Good Noon Sir. Fine. How do you do?",
      timestamp: 1626185471,
    },
    {
      id: 5,
      sender: "sender",
      message: "How can I help you Sir?",
      timestamp: 1644822085,
    },
  ]);

  const messagesRef = useRef();

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages.length]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const newMessage = {
      id: messages?.length + 1,
      sender: "user",
      message,
      imageUrl: user,
      timestamp: Date.now(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    formRef.current.reset();
  };

  return (
    <div className="fixed left-0 right-0 bottom-10 px-6 z-[70]">
      <div className="max-w-[75rem] mx-auto flex flex-col">
        <div
          className={`flex flex-col w-[23rem] max-w-[23rem] border border-fadeHigh dark:border-blackText rounded-3xl ml-auto mb-1 overflow-hidden ${
            isOpentChat ? "scale-100" : "scale-0"
          } origin-bottom-right duration-300`}
        >
          <div className="w-full flex  items-center justify-between gap-6 p-3 bg-white dark:bg-blackHigh">
            <div></div>
            <div>
              <img src={logo} alt="" className="w-36 lg:w-auto" />
            </div>
            <button type="button" onClick={() => setIsOpenChat(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M16.1506 14L22.3258 7.82479C22.7819 7.36979 22.7819 6.63019 22.3258 6.17519C21.8696 5.71903 21.1323 5.71903 20.6761 6.17519L14.5009 12.3503L8.32578 6.17519C7.86961 5.71903 7.13228 5.71903 6.67611 6.17519C6.21994 6.63019 6.21994 7.36979 6.67611 7.82479L12.8513 14L6.67611 20.1752C6.21994 20.6302 6.21994 21.3698 6.67611 21.8248C6.90361 22.0523 7.20228 22.1667 7.50094 22.1667C7.79961 22.1667 8.09828 22.0523 8.32578 21.8248L14.5009 15.6497L20.6761 21.8248C20.9036 22.0523 21.2023 22.1667 21.5009 22.1667C21.7996 22.1667 22.0983 22.0523 22.3258 21.8248C22.7819 21.3698 22.7819 20.6302 22.3258 20.1752L16.1506 14Z"
                  fill="#555568"
                />
              </svg>
            </button>
          </div>
          <div
            className="h-[23rem] w-full bg-fadeMid p-4 dark:bg-blackText overflow-auto flex items-end flex-wrap gap-4 chat"
            ref={messagesRef}
          >
            <div className="flex flex-col gap-4 overflow-auto">
              {messages?.map((message) => (
                <Message message={message}></Message>
              ))}
            </div>
          </div>
          <div className="bg-white p-4  dark:bg-blackHigh">
            <form
              action=""
              className="w-full flex  items-center justify-between gap-3 py-2 px-4 bg-fadeMid dark:bg-blackText rounded-lg"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div>
                <input
                  type="file"
                  id="file"
                  className="absolute opacity-0 invisible"
                />
                <label htmlFor="file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17.565 14.546C17.31 14.546 17.0551 14.449 16.8601 14.255C16.4681 13.866 16.466 13.232 16.856 12.841L18.824 10.863C19.584 10.111 20 9.104 20 8.024C20 6.944 19.5829 5.93301 18.8259 5.17601C17.2599 3.60801 14.7079 3.61001 13.1389 5.17601L11.1731 7.15202C10.7841 7.54302 10.152 7.54602 9.75905 7.15602C9.36705 6.76702 9.3649 6.13302 9.7549 5.74202L11.7229 3.76402C14.0719 1.41502 17.893 1.41501 20.24 3.76201C21.375 4.89601 22 6.41 22 8.024C22 9.643 21.3741 11.154 20.2361 12.28L18.2739 14.253C18.0789 14.448 17.822 14.546 17.565 14.546ZM12.2739 20.24L14.2529 18.272C14.6449 17.882 14.6471 17.249 14.2571 16.858C13.8671 16.467 13.235 16.464 12.843 16.854L10.8631 18.824C9.29405 20.392 6.74404 20.39 5.17604 18.824C3.60904 17.256 3.60909 14.706 5.17409 13.14L7.15309 11.172C7.54509 10.782 7.547 10.149 7.157 9.75801C6.767 9.36701 6.13493 9.36401 5.74293 9.75401L3.76295 11.724C1.41495 14.071 1.41495 17.89 3.76295 20.238C4.93795 21.412 6.47999 21.998 8.02199 21.998C9.56199 21.999 11.1029 21.413 12.2739 20.24ZM9.70705 15.707L15.7329 9.68202C16.1239 9.29102 16.1239 8.65802 15.7329 8.26802C15.3419 7.87802 14.7101 7.87802 14.3191 8.26802L8.29298 14.293C7.90198 14.684 7.90198 15.317 8.29298 15.707C8.48798 15.902 8.74401 16 9.00001 16C9.25601 16 9.51204 15.902 9.70705 15.707Z"
                      className="fill-slateSemi dark:fill-white"
                    />
                  </svg>
                </label>
              </div>
              <div className="h-4 w-1 bg-slateSemi dark:bg-white"></div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full outline-none bg-transparent placeholder:text-slateDark dark:placeholder:text-white dark:text-white"
                  placeholder="Type Message..."
                  name="message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="p-2 bg-primaryColor rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15.3717 2.55248L4.44413 5.28416C1.8333 5.93666 1.85913 9.65666 4.47913 10.2733L7.87838 11.0733C7.96254 11.0933 8.05171 11.0683 8.11255 11.0067L12.0609 7.05832C12.3026 6.81665 12.7024 6.81665 12.9441 7.05832C13.1858 7.29999 13.1858 7.69999 12.9441 7.94165L8.9941 11.8916C8.93327 11.9525 8.90757 12.0416 8.92757 12.1258L9.72672 15.5217C10.3434 18.1417 14.0632 18.1675 14.7157 15.5567L17.4475 4.62915C17.76 3.37415 16.6242 2.23914 15.3717 2.55248Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <button
          type="button"
          className="p-3 bg-black rounded-full max-w-max ml-auto"
          onClick={() => setIsOpenChat((prev) => !prev)}
        >
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-14 md:h-14"
          >
            <path
              d="M30.0027 7.5C17.5777 7.5 7.50518 17.5726 7.50518 29.9976C7.50518 33.3476 8.25537 36.5475 9.58037 39.395C10.1054 40.495 10.1055 41.7699 9.73052 42.9449L7.6303 49.1949C6.9803 51.1449 8.85535 53.02 10.8054 52.37L17.0554 50.2699C18.2304 49.8949 19.5052 49.8951 20.6052 50.4201C23.4552 51.7451 26.6552 52.495 30.0052 52.495C42.4302 52.495 52.5027 42.4226 52.5027 29.9976C52.5002 17.5726 42.4277 7.5 30.0027 7.5ZM20.0052 32.5C18.6252 32.5 17.493 31.38 17.493 30C17.493 28.62 18.6002 27.5 19.9802 27.5H20.0052C21.3877 27.5 22.5052 28.62 22.5052 30C22.5052 31.38 21.3877 32.5 20.0052 32.5ZM30.0052 32.5C28.6252 32.5 27.493 31.38 27.493 30C27.493 28.62 28.6002 27.5 29.9802 27.5H30.0052C31.3877 27.5 32.5052 28.62 32.5052 30C32.5052 31.38 31.3877 32.5 30.0052 32.5ZM40.0052 32.5C38.6252 32.5 37.493 31.38 37.493 30C37.493 28.62 38.6002 27.5 39.9802 27.5H40.0052C41.3877 27.5 42.5052 28.62 42.5052 30C42.5052 31.38 41.3877 32.5 40.0052 32.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
