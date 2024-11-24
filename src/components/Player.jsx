import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong,volBg,volBar,volCont} = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className="hidden lg:flex items-center gap-4">
            <img className='w-12' src={track.image} alt="img of song" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-4">
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" />
                <img className='w-4 cursor-pointer' onClick={previous} src={assets.prev_icon} alt="previous" />
                {playStatus?<img className='w-4 cursor-pointer' onClick={pause} src={assets.pause_icon} alt="play/pause" />:<img className='w-4 cursor-pointer' onClick={play} src={assets.play_icon} alt="play/pause" />
                }
                
                <img className='w-4 cursor-pointer' onClick={next} src={assets.next_icon} alt="next" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loop" />
            </div>
            <div className="flex items-center gap-5">
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className='w-4' src={assets.plays_icon} alt="plays" />
                <img className='w-4' src={assets.mic_icon} alt="plays" />
                <img className='w-4' src={assets.queue_icon} alt="plays" />
                <img className='w-4' src={assets.speaker_icon} alt="plays" />
                <img className='w-4' src={assets.volume_icon} alt="plays" />
                <div ref={volBg} onClick={volCont} className="w-20 bg-slate-50 h-1 rounded cursor-pointer">
                    <hr ref={volBar} className='h-1 border-none w-full bg-green-800 rounded-full' />
                </div>
                <img className='w-4' src={assets.mini_player_icon} alt="plays" />
                <img className='w-4' src={assets.zoom_icon} alt="plays" />
            </div>
    </div>
  )
}

export default Player