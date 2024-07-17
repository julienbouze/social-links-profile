import Link from "next/link";

export default function Network({url, name}) {
    return (
      <>
      <Link href={url} target="_blank">
        <div className="flex justify-center items-center bg-customGrey transition hover:bg-customGreen px-4 py-2 rounded-lg w-full">
            {name}
        </div>
      </Link>
      </>
    );
  }