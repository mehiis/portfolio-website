import header from '@/assets/images/misc/fouronefour.png'
import notFound from '@/assets/images/misc/not-found.png'
import goBack from '@/assets/images/buttons/go-back.png'

const NotFound = () => {
  return (
    <section className='mx-auto flex flex-col items-center justify-center min-h-screen'>
            <img
              src={header}
              alt="404 Not Found"
              className='mb-10 h-auto w-[20vh]'
              width="100"
              height="100"
              />
            <img src={notFound} alt="Page you were looking for does not exist." className='mb-20 h-auto w-[40vh]'/>
            <button onClick={() => window.history.back()} >
                <img
                  src={goBack}
                  alt="Go Back Button"
                  className='hover:scale-110 transition-transform h-auto w-[25vh]'
                  width="200"
                  height="50"
              />
            </button>
    </section>
  )
}

export default NotFound
