import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import DesktopDetails from './DesktopDetails'
import MobileDetails from './MobileDetails'
import data from '../../sfpopos-data.json'

function CardDetails() {
  const params = useParams()
  const { id } = params // Location index
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 784);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 784);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? <DesktopDetails data={data[id]} /> : <MobileDetails data={data[id]} />}
    </>
  );
}

export default CardDetails;
