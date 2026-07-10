import flower from "/favicon.svg";

const SpinningFlower = () => {
  return (
    <div>
        <img 
            src={flower} 
            alt="Loading spinner" 
            className="spinning-image" 
        />
        <p className="text-gray-500 font-[LeagueSpartanRegular] mt-2">Loading...</p>
    </div>
  )
}

export default SpinningFlower
