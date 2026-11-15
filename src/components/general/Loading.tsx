import loading from "@/assets/images/misc/loading.webp";

function Loading() {
  return (
<div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
    <img
        src={loading}
        alt="Loading..."
        className="h-44 w-44 object-contain"
    />
</div>
  );
}

export default Loading;
