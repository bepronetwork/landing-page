import Image, { StaticImageData } from 'next/image';
import React, {useEffect, useState} from 'react';

interface Options {
  src: string | StaticImageData;
}

export default function Avatar({src}: Options) {
  const [source, setSource] = useState<string>();

  useEffect(() => { setSource(typeof src === 'string' ? src : src.src); }, [src]);

  return <>
    {source && (
      <Image
        className="avatar"
        width={90}
        height={90}
        src={source}
        alt="Member avatar"
      />
    )}
  </>
}
