const NotFound = () => {
  return (
    <div className='mx-auto py-50 center'>
        <div className='max-w-[1600px] mx-auto text-white p-5'>
            <h2 className="text-[4vw] font-[header] text-black italic text-center">OOPS.. Page Not Found! :(</h2>
            <p className="text-[1.3vw] text-gray-700 p-10 bg-[var(--white-color)] m-4 text-center">
                The page you are looking for does not exist.
            </p>
        </div>
    </div>
  )
}

export default NotFound
