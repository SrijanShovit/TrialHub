import React from "react";
import Link from 'next/link';

export default function LinkTo(props) {
  return (
    <div className="flex items-center border-black hover:border-b-2 py-5 text-xl md:text-base md:p-1">
      <Link href={"/" + props.linkTo}>{props.linkTo.charAt(0).toUpperCase() + props.linkTo.slice(1)}</Link>
    </div>
  );
}
