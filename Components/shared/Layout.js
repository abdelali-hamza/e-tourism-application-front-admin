import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function Layout(props) {
    const { children } = props
    return (
        <div className='flex flex-row justify-between w-full h-full'>
            <div >
                <Sidebar />
            </div>
            <div className="w-full flex flex-col sticky top-0">
                <Navbar />
                <div className='justify-center items-center mx-8 my-5'>
                {children}
                </div>
            </div>

        </div>
    )
}
