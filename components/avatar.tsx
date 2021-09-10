import React, {useEffect, useState} from 'react';

interface Options {
  src: string | StaticImageData;
}

export default function Avatar({src}: Options) {
  const [source, setSource] = useState<string>();

  useEffect(() => { setSource(typeof src === 'string' ? src : src.src); }, [src]);

  return <>
    <img className="avatar" src={source} alt="Member avatar"/>
  </>
}
