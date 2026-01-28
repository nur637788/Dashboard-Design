
import { IoMdNotificationsOutline } from 'react-icons/io';

function Navber() {

    return (
        <div className=' bg-[#111B3C] px-5 '>
            <div className='flex justify-between items-center'>
                <h2>Dashboard Overview</h2>
                <div className='flex justify-end items-center gap-3 md:gap-5'>
                    <div className=' flex items-center justify-center cursor-pointer'>
                        <IoMdNotificationsOutline size={24} />
                    </div>
                    <div className=' py-2 rounded-full flex justify-center items-center  cursor-pointer'>
                        <img className='w-10 h-10 rounded-full' src="/images/user.png" alt="berger" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber
