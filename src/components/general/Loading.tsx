import loading from "@/assets/images/misc/loading.webp";
import flower from "@/assets/images/misc/flower.webp";

function Loading() {
  return (
<div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-white dark:bg-gray-950">
        <img
        src={flower}
        alt="Spinning flower indicating loading state."
        className="h-14 w-14 object-contain animate-spin [animation-duration:2s] m-0"
    />

    <img
        src={loading}
        alt="Loading..."
        className="w-44 object-contain m-0"
    />
</div>
  );
}

export default Loading;
