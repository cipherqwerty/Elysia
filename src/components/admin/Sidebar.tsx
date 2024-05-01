export default function Sidebar() {
    return (
        <div className='w-[15%] h-screen p-[15px]'>
            <div className='w-full h-full flex flex-col  rounded-[50px] bg-[#dee2e6] '>
                <div className='[&_*]:font-bold text-[30px] pl-[20px] pt-[30px]'>
                    <h1>Elysia</h1>
                </div>
                <div className='flex flex-col pt-[30px] h-full justify-between pb-[30px]'>
                    <div className='flex flex-col gap-3 px-[10px]'>
                        <div className='flex gap-3 mt-[10px] hover:bg-[#edede9] pl-[20px] py-[10px] rounded-full cursor-pointer  '>
                            <img
                                src='../src/assets/images/home.svg'
                                alt='a icon of home'
                            />
                            <span>Dashboard</span>
                        </div>
                        <div className='flex gap-3 mt-[10px] hover:bg-[#edede9] pl-[20px] py-[10px] rounded-full cursor-pointer'>
                            <img
                                src='../src/assets/images/cart.svg'
                                alt='a icon of cart'
                            />
                            <span>Orders</span>
                        </div>
                        <div className='flex gap-3 mt-[10px] hover:bg-[#edede9] pl-[20px] py-[10px] rounded-full cursor-pointer'>
                            <img
                                src='../src/assets/images/dashboard.svg'
                                alt='a icon of dashboard'
                            />
                            <span>Products</span>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <div className='flex gap-3 hover:bg-[#edede9] pl-[20px] py-[10px] rounded-full cursor-pointer'>
                            <img
                                src='../src/assets/images/logout.svg'
                                alt=''
                            />
                            <span className=' text-[#d62828]'>Sign Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
