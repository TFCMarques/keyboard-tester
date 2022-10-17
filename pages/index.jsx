import Head from 'next/head';
import { useState, useEffect, useCallback } from "react";
import { AiFillGithub } from 'react-icons/ai';
import { BsShift, BsCapslock, BsArrowReturnLeft, BsBackspace, BsArrowLeftRight, BsJustify, BsKeyboard } from 'react-icons/bs';

export default function Home() {
  const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
    const [playing, setPlaying] = useState(false);

    const playAudio = () => {
      const audio = new Audio('keyPressed.mp3');
      const audioVolumeMixer = Math.random() * (1 - 0.25) + 0.25;

      audio.volume = audioVolumeMixer;
      audio.play();

      setPlaying(true);
    }

    const downHandler = useCallback((event) => {
      event.preventDefault();
      if (event.key === targetKey || event.code === targetKey) {
        setKeyPressed(true);
        if (!playing) playAudio();
      }
    }, [setKeyPressed, playing, targetKey]);

    const upHandler = useCallback((event) => {
      event.preventDefault();
      if (event.key === targetKey || event.code === targetKey) {
        setKeyPressed(false);
        setPlaying(false);
      }
    }, [setKeyPressed, setPlaying, targetKey]);

    useEffect(() => {
      document.addEventListener("keydown", downHandler);
      document.addEventListener("keyup", upHandler);

      return () => {
        document.removeEventListener("keydown", downHandler);
        document.removeEventListener("keyup", upHandler);
      };
    }, [keyPressed, downHandler, upHandler]);

    return keyPressed ? "bg-emerald-400" : "bg-slate-200";
  }

  return (
    <>
      <Head>
      <title>Keyboard Tester</title>
        <meta name="title" content="Keyboard Tester" />
        <meta name="author" content="Tiago Marques" />
        <meta name="description" content="Keyboard Tester for standard QWERTY (US Layout)" />
        <meta name="keywords" content="keyboard, tester, testing, keys" />
          
        <meta property="og:url" content="https://keyboard-tester-tfcmarques.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Keyboard Tester" />
        <meta property="og:description" content="Keyboard Tester for standard QWERTY (US Layout)" />
        <meta property="og:image" content="https://keyboard-tester-tfcmarques.vercel.app/api/og" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="keyboard-tester-tfcmarques.vercel.app" />
        <meta property="twitter:url" content="https://keyboard-tester-tfcmarques.vercel.app/" />
        <meta name="twitter:title" content="Keyboard Tester" />
        <meta name="twitter:description" content="Keyboard Tester for standard QWERTY (US Layout)" />
        <meta name="twitter:image" content="https://keyboard-tester-tfcmarques.vercel.app/api/og" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100 via-sky-300 to-sky-500 h-screen">
        <div className="flex flex-col justify-evenly h-screen text-slate-900">
          <div className="flex flex-row justify-center items-center">
            <BsKeyboard className="text-7xl mr-4" />
            <h1 className="text-5xl font-semibold">Keyboard Tester</h1>
          </div>
          <div className="max-w-fit min-w-fit mx-auto bg-sky-900 p-5 rounded-xl shadow-md shadow-slate-900">
            <div className="flex flex-row justify-between mb-5">
              <div className={`${useKeyPress("Escape")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">ESC</p>
              </div>
              <div className="flex flex-row">
                <div className={`${useKeyPress("F1")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F1</p>
                </div>
                <div className={`${useKeyPress("F2")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F2</p>
                </div>
                <div className={`${useKeyPress("F3")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F3</p>
                </div>
                <div className={`${useKeyPress("F4")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F4</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className={`${useKeyPress("F5")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F5</p>
                </div>
                <div className={`${useKeyPress("F6")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F6</p>
                </div>
                <div className={`${useKeyPress("F7")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F7</p>
                </div>
                <div className={`${useKeyPress("F8")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F8</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className={`${useKeyPress("F9")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F9</p>
                </div>
                <div className={`${useKeyPress("F10")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F10</p>
                </div>
                <div className={`${useKeyPress("F11")} flex flex-col justify-center w-16 h-10 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F11</p>
                </div>
                <div className={`${useKeyPress("F12")} flex flex-col justify-center w-16 h-10 rounded-md shadow-sm shadow-slate-900`}>
                  <p className="font-semibold text-center">F12</p>
                </div>
              </div>
            </div>
            <div className="h-16 flex flex-row justify-between mb-1">
              <div className={`${useKeyPress("\`")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{"`"}</p>
              </div>
              <div className={`${useKeyPress("1")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">1</p>
              </div>
              <div className={`${useKeyPress("2")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">2</p>
              </div>
              <div className={`${useKeyPress("3")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">3</p>
              </div>
              <div className={`${useKeyPress("4")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">4</p>
              </div>
              <div className={`${useKeyPress("5")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">5</p>
              </div>
              <div className={`${useKeyPress("6")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">6</p>
              </div>
              <div className={`${useKeyPress("7")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">7</p>
              </div>
              <div className={`${useKeyPress("8")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">8</p>
              </div>
              <div className={`${useKeyPress("9")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">9</p>
              </div>
              <div className={`${useKeyPress("0")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">0</p>
              </div>
              <div className={`${useKeyPress("-")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">-</p>
              </div>
              <div className={`${useKeyPress("=")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">=</p>
              </div>
              <div className={`${useKeyPress("Backspace")} flex flex-row items-center justify-center w-[132px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <BsBackspace className="text-md mr-2" />
                <p className="font-semibold text-center">BACKSPACE</p>
              </div>
            </div>
            <div className="h-16 flex flex-row justify-between mb-1">
              <div className={`${useKeyPress("Tab")} flex flex-row items-center justify-center w-[100px] h-16  rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">TAB</p>
                <BsArrowLeftRight className="text-md ml-2" />
              </div>
              <div className={`${useKeyPress("KeyQ")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">Q</p>
              </div>
              <div className={`${useKeyPress("KeyW")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">W</p>
              </div>
              <div className={`${useKeyPress("KeyE")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">E</p>
              </div>
              <div className={`${useKeyPress("KeyR")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">R</p>
              </div>
              <div className={`${useKeyPress("KeyT")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">T</p>
              </div>
              <div className={`${useKeyPress("KeyY")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">Y</p>
              </div>
              <div className={`${useKeyPress("KeyU")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">U</p>
              </div>
              <div className={`${useKeyPress("KeyI")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">I</p>
              </div>
              <div className={`${useKeyPress("KeyO")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">O</p>
              </div>
              <div className={`${useKeyPress("KeyP")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">P</p>
              </div>
              <div className={`${useKeyPress("[")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">[</p>
              </div>
              <div className={`${useKeyPress("]")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">]</p>
              </div>
              <div className={`${useKeyPress("\\")} flex flex-col justify-center w-[96px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{"\\"}</p>
              </div>
            </div>
            <div className="h-16 flex flex-row justify-between mb-1">
              <div className={`${useKeyPress("CapsLock")} flex flex-row items-center justify-center w-[116px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">CAPS</p>
                <BsCapslock className="text-md ml-2" />
              </div>
              <div className={`${useKeyPress("KeyA")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">A</p>
              </div>
              <div className={`${useKeyPress("KeyS")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">S</p>
              </div>
              <div className={`${useKeyPress("KeyD")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">D</p>
              </div>
              <div className={`${useKeyPress("KeyF")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">F</p>
              </div>
              <div className={`${useKeyPress("KeyG")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">G</p>
              </div>
              <div className={`${useKeyPress("KeyH")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">H</p>
              </div>
              <div className={`${useKeyPress("KeyJ")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">J</p>
              </div>
              <div className={`${useKeyPress("KeyK")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">K</p>
              </div>
              <div className={`${useKeyPress("KeyL")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">L</p>
              </div>
              <div className={`${useKeyPress(";")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{";"}</p>
              </div>
              <div className={`${useKeyPress("\'")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{"'"}</p>
              </div>
              <div className={`${useKeyPress("Enter")} flex flex-row items-center justify-center w-[148px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <BsArrowReturnLeft className="text-md mr-2" />
                <p className="font-semibold text-center">RETURN</p>
              </div>
            </div>
            <div className="h-16 flex flex-row justify-between mb-1">
              <div className={`${useKeyPress("ShiftLeft")} flex flex-row justify-center items-center w-[150px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">SHIFT</p>
                <BsShift className="text-md ml-2" />
              </div>
              <div className={`${useKeyPress("KeyZ")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">Z</p>
              </div>
              <div className={`${useKeyPress("KeyX")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">X</p>
              </div>
              <div className={`${useKeyPress("KeyC")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">C</p>
              </div>
              <div className={`${useKeyPress("KeyV")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">V</p>
              </div>
              <div className={`${useKeyPress("KeyB")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">B</p>
              </div>
              <div className={`${useKeyPress("KeyN")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">N</p>
              </div>
              <div className={`${useKeyPress("KeyM")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">M</p>
              </div>
              <div className={`${useKeyPress(",")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{","}</p>
              </div>
              <div className={`${useKeyPress(".")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{"."}</p>
              </div>
              <div className={`${useKeyPress("/")} flex flex-col justify-center w-16 h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">{"/"}</p>
              </div>
              <div className={`${useKeyPress("ShiftRight")} flex flex-row items-center justify-center w-[182px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <BsShift className="text-md mr-2" />
                <p className="font-semibold text-center">SHIFT</p>
              </div>
            </div>
            <div className="h-16 flex flex-row justify-between">
              <div className={`${useKeyPress("ControlLeft")} flex flex-col justify-center w-[100px] h-16 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">CTRL</p>
              </div>
              <div className={`${useKeyPress("Meta")} flex flex-col justify-center w-[100px] h-16 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">WIN</p>
              </div>
              <div className={`${useKeyPress("AltLeft")} flex flex-col justify-center w-[100px] h-16 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">ALT</p>
              </div>
              <div className={`${useKeyPress("Space")} flex flex-col justify-center w-[392px] h-16 mr-1 rounded-md shadow-sm shadow-slate-900`} />
              <div className={`${useKeyPress("AltRight")} flex flex-col justify-center w-[100px] h-16 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">ALT GR</p>
              </div>
              <div className={`${useKeyPress("ContextMenu")} flex flex-row items-center justify-center w-[100px] h-16 mr-1 rounded-md shadow-sm shadow-slate-900`}>
                <BsJustify className="text-md mr-2" />
                <p className="font-semibold text-center">CTX</p>
              </div>
              <div className={`${useKeyPress("ControlRight")} flex flex-col justify-center w-[100px] h-16 rounded-md shadow-sm shadow-slate-900`}>
                <p className="font-semibold text-center">CTRL</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center py-3 gap-2 items-cente text-xl">
            <p className="font-s">Developed by:</p>
            <a href="https://github.com/TFCMarques" target="_blank" rel="noreferrer" className="flex flex-row justify-center items-center">
              <AiFillGithub className="text-2xl mr-1" />
              <h1 className="font-bold">TFCMarques</h1>
            </a>
          </div>
        </div>
      </main >
    </>
  )
}